import React, { Component } from 'react';

interface IProperty {
  href: string;
  text?: string;
}

interface IState {}

export default class TweetButton extends Component<IProperty, IState> {
  
  public render(): JSX.Element {
    
    let uri = 'url=' + encodeURIComponent(this.props.href);

    if (typeof this.props.text !== 'undefined' && this.props.text) {
      uri += '&text=' + encodeURIComponent(this.props.text);
    }
    
    return (
      <div id="social-media-twitter-tweet-button-component">
        <a className="twitter-share-button" href={'https://twitter.com/intent/tweet/' + uri} style={{'display': 'none'}}>Twitter</a>
      </div>
    );
  }
}
