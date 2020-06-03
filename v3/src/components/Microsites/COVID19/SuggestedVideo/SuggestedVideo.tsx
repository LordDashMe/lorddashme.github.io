import React, { Component } from 'react';
import loadable from '@loadable/component';

import { isSSR } from '../../../../common/helper';

import Firestore from '../../../../components/Database/Firebase/Firestore';

const YoutubeIframe = loadable(() => import('../../../../components/VideoPlayer/Youtube/YoutubeIframe'), { fallback: null });

import style from './SuggestedVideo.module.scss';

interface IProperty {}

interface IState {
  suggestedVideo: ISuggestedVideo[];
}

interface ISuggestedVideo {
  id: string;
  videoId: string;
  order: number;
  active: boolean;
}

export default class SuggestedVideo extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);

    this.state = {
      suggestedVideo: [
        {
          id: '1',
          videoId: '',
          order: 0,
          active: true
        }
      ]
    };
  }

  public componentDidMount(): void {
    if (!isSSR()) {
      this.fetchPHCOVID19TrackerSuggestedVideoOnFireStore(); 
    }
  }

  private fetchPHCOVID19TrackerSuggestedVideoOnFireStore(): void {
    
    Firestore.clearInstance();
    Firestore.initialize();
    Firestore.getInstance()
      .collection('ph-covid19-tracker-suggested-video')
      .where('active', '==', true)
      .orderBy('order', 'desc')
      .get()
      .then((querySnapshot: any): void => { 
        
        const suggestedVideo: any = querySnapshot.docs.map((doc: any): ISuggestedVideo => {
          const document: any = doc.data();
          return {
            id: doc.id,
            videoId: document.video_id,
            order: document.order,
            active: document.active
          };
        });

        this.setState({
          suggestedVideo: suggestedVideo
        });
      });
  }

  private getSuggestedVideo(): JSX.Element[] | null {

    if (!isSSR()) {
      return this.state.suggestedVideo.map((suggestedVideo: ISuggestedVideo): JSX.Element => {

        if (suggestedVideo.videoId === '') {
          return (<div key={suggestedVideo.id} className={style['content']}></div>);
        }

        return(
          <div key={suggestedVideo.id} className={style['content']}>
            <YoutubeIframe 
              elementId={'ph-covid19-tracker-suggested-video-' + suggestedVideo.videoId} 
              videoId={suggestedVideo.videoId} 
              height={'100%'} 
              width={'100%'} />
          </div>
        );
      });
    }
    
    return null;
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-suggested-video-component" className={style['container']}>
        <h2 className={style['title']}>SUGGESTED VIDEO</h2>
        {this.getSuggestedVideo()}
      </div>
    );
  } 
}
