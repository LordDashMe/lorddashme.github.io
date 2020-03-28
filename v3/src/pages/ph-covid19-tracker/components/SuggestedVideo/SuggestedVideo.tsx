import React, { Component } from 'react';
import loadable from '@loadable/component';

import { isSSR, loadableFallbackTemplate } from '../../../../common/helper';

import Firestore from '../../../../components/Database/Firebase/Firestore';

const Youtube = loadable(() => import('../../../../components/VideoPlayer/Youtube/Youtube'), { fallback: loadableFallbackTemplate(`#animate-number-component`) });

import style from './SuggestedVideo.module.scss';

interface IProperty {}

interface IState {
  suggestedVideo: ISuggestedVideo[];
}

interface ISuggestedVideo {
  id: string;
  videoId: string;
}

export default class SuggestedVideo extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);

    this.state = {
      suggestedVideo: []
    };
  }

  public componentDidMount(): void {
    if (! isSSR()) {
      this.fetchProjectsOnFireStore(); 
    }
  }

  private fetchProjectsOnFireStore(): void {
    
    Firestore.clearInstance();
    Firestore.initialize();
    Firestore.getInstance()
      .collection('ph-covid19-tracker-suggested-video')
      .where('active', '==', true)
      .get()
      .then((querySnapshot: any): void => { 
        
        const suggestedVideo: any = querySnapshot.docs.map((doc: any): ISuggestedVideo => {
          const document: any = doc.data();
          return {
            id: doc.id,
            videoId: document.video_id
          };
        });

        this.setState({
          suggestedVideo: suggestedVideo
        });
      });
  }

  private getSuggestedVideo(): JSX.Element[] {
    return this.state.suggestedVideo.map((suggestedVideo: ISuggestedVideo): JSX.Element => {
      return(
        <div key={suggestedVideo.id} className={style['content']}>
          <Youtube elementId={'suggested-video-' + suggestedVideo.videoId} videoId={suggestedVideo.videoId} height={'100%'} width={'100%'} />
        </div>
      );
    });
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
