import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare const YT: any;

interface IProperty {
  elementId: string;
  videoId: string;
  height: string;
  width: string;
}

interface IState {}

export default class YoutubeIframe extends Component<IProperty, IState> {

  private static readonly WAITING_TIME = 1000;

  public constructor(properties: any) {
    
    super(properties);

    this.state = {};
  }

  public componentDidMount(): void {
    if (! isSSR()) {
      this.onYouTubeIframeAPIReady();
    }
  }

  private onYouTubeIframeAPIReady(): void {

    if (typeof YT !== 'undefined' && YT && YT.Player) {
      console.log('Youtube_Component: YT detected!');
      new YT.Player(
        this.setElementId(this.props.elementId), 
        {
          height: this.props.height,
          width: this.props.width,
          videoId: this.props.videoId,
          playerVars: {
            rel: 0,
            playsinline: 1
          }
        }
      );
      
    } else {
      console.info(`Youtube_Component: Waiting for YT to load properly. ${YoutubeIframe.WAITING_TIME}ms`);
      setTimeout(this.onYouTubeIframeAPIReady.bind(this), YoutubeIframe.WAITING_TIME);
    }
  }

  private setElementId(elementId: string): string {
    return 'video-player-youtube-iframe-' + elementId + '-component';
  }

  public render(): JSX.Element {
    return (<div id={this.setElementId(this.props.elementId)}></div>);
  }
}
