import React, { Component } from 'react';
import { debounce, isElementInViewport } from '../../helper';

declare global {

  interface Window {
    adsbygoogle: any;
  }
}

interface GoogleAdsenseResponsiveAdProps {
  adClient: string;
  adSlot: string;
}

export default class GoogleAdsenseResponsiveAd extends Component<GoogleAdsenseResponsiveAdProps> {

  private mainElement: HTMLElement;

  public componentDidMount(): void {
    
    if (typeof window !== 'undefined') {
      this.lazyLoadingAdCall();
    }
  }

  private lazyLoadingAdCall(): void {
    
    const handleScroll = debounce(() => {

      if (isElementInViewport(this.mainElement)) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        window.removeEventListener('scroll', handleScroll);
      }

    }, 500);

    window.addEventListener('scroll', handleScroll);
  }

  public render(): JSX.Element {

    return (
      <ins
        ref={(element: HTMLModElement) => { this.mainElement = element; }}
        className="adsbygoogle"
        style={{'display': 'block'}}
        data-ad-client={this.props.adClient}
        data-ad-slot={this.props.adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    );
  }
}
