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

export default class Youtube extends Component<IProperty, IState> {

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

    if ((typeof YT !== "undefined") && YT && YT.Player) {

      new YT.Player(this.props.elementId, {
        height: this.props.height,
        width: this.props.width,
        videoId: this.props.videoId,
        playerVars: {
          rel: 0,
          playsinline: 1
        }
      });
      
    } else {
      console.info(`Waiting for YT to load properly. ${Youtube.WAITING_TIME}ms`);
      setTimeout(this.onYouTubeIframeAPIReady.bind(this), Youtube.WAITING_TIME);
    }
  }

  public render(): JSX.Element {
    return (<div id={this.props.elementId}></div>);
  }
}
