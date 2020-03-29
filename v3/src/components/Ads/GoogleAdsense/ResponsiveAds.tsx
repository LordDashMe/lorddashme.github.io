import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

import style from './ResponsiveAds.module.scss';

declare global {
  interface Window {
    adsbygoogle?: any;
  }
}

interface IProperty {
  adClient: string;
  adSlot: string;
}

interface IState {}

export default class ResponsiveAds extends Component<IProperty, IState> {

  public componentDidMount(): void {
    if (! isSSR()) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }

  public render(): JSX.Element {
    return (
      <div id="ads-google-adsense-responsive-ads-component" className={style['container']}>
        <ins className="adsbygoogle"
             style={{'display': 'block'}}
             data-ad-client={this.props.adClient}
             data-ad-slot={this.props.adSlot}
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    );
  }
}
