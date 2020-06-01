import React, { Component } from 'react';
import loadable from '@loadable/component';

import { isSSR, loadableFallbackTemplate } from '../../../../common/helper';

import Firestore from '../../../Database/Firebase/Firestore';
import AnimateNumber from '../../../Animation/AnimateNumber/AnimateNumber';

const ShareButton = loadable(() => import('../../../SocialMedia/Facebook/ShareButton'), { fallback: loadableFallbackTemplate(`#social-media-facebook-share-button-component`) });
const TweetButton = loadable(() => import('../../../SocialMedia/Twitter/TweetButton'), { fallback: loadableFallbackTemplate(`#social-media-twitter-tweet-button-component`) });

import style from './StatusOverview.module.scss';

interface IProperty {}

interface IState {
  loader: boolean;
  pageUrl: string;
  statusOverview: IStatusOverview[];
}

export interface IStatusOverview {
  id: string;
  sysId: string;
  label: string;
  count: number;
  color: string;
  order: number;
  asOfDateTime?: string;
}

export default class StatusOverview extends Component<IProperty, IState> {

  public constructor(properties: any) {
    
    super(properties);
    
    this.state = {
      loader: true,
      pageUrl: '/ph-covid19-tracker/',
      statusOverview: [
        {
          id: 'id_confirmed_cases',
          sysId: 'confirmed_cases',
          label: 'CONFIRMED CASES',
          count: 0,
          color: '#6f6f6f',
          order: 4,
          asOfDateTime: '' // March 20, 2020 7PM PST
        },
        {
          id: 'id_active_cases',
          sysId: 'active_cases',
          label: 'ACTIVE CASES',
          count: 0,
          order: 3,
          color: '#e29e01'
        },
        {
          id: 'id_recovered',
          sysId: 'recovered',
          label: 'RECOVERED',
          count: 0,
          order: 2,
          color: '#60a138'
        },
        {
          id: 'id_deaths',
          sysId: 'deaths',
          label: 'DEATHS',
          count: 0,
          order: 1,
          color: '#a13838'
        }
      ]
    };
  }

  public componentDidMount(): void {
    if (! isSSR()) {
      this.setPageUrl();
      this.fetchPHCOVID19TrackerStatusOverviewOnFireStore(); 
    }
  }

  private setPageUrl(): void {
    
    const state = {...this.state};
    
    state.pageUrl = document.location.href;
    
    this.setState(state);
  }

  private fetchPHCOVID19TrackerStatusOverviewOnFireStore(): void {
    
    Firestore.clearInstance();
    Firestore.initialize();
    Firestore.getInstance()
      .collection('ph-covid19-tracker-status-overview')
      .orderBy('order', 'desc')
      .get()
      .then((querySnapshot: any): void => {

        const statusOverview: any = querySnapshot.docs.map((doc: any): IStatusOverview => {
          
          const document: any = doc.data();
          
          const filteredDocument: IStatusOverview = {
            id: doc.id,
            sysId: document.sys_id,
            label: document.label,
            count: document.count,
            color: document.color,
            order: document.order
          };
          
          if (typeof document.asOfDateTime !== 'undefined') {
            filteredDocument['asOfDateTime'] = document.asOfDateTime;
          }

          return filteredDocument;
        });

        this.setState({
          statusOverview: statusOverview,
          loader: false
        });
      });
  }

  private getStatusOverview(): JSX.Element[] {
    return (this.state.statusOverview)
      .filter((statusOverview: IStatusOverview): IStatusOverview | boolean => {
        
        if (statusOverview.sysId === 'confirmed_cases') {
          return false;
        }

        return statusOverview;
      })
      .map((statusOverview: IStatusOverview): JSX.Element => {
        
        return (
          <div key={statusOverview.id} className={style['item-case'] + ' ' + statusOverview.sysId}>
            <h2>{statusOverview.label}</h2>
            <p style={{'color': statusOverview.color}}>
              <AnimateNumber value={statusOverview.count} isCommaSeparated={true} />
            </p>
          </div>
        );
      });
  }

  private getConfirmCases(): JSX.Element {
    return (
      <div key={this.state.statusOverview[0].id} className={style['confirmed-case']}>
        <h2>{this.state.statusOverview[0].label}</h2>
        <p style={{'color': this.state.statusOverview[0].color}}>
          <AnimateNumber value={this.state.statusOverview[0].count} isCommaSeparated={true} />
        </p>
      </div>
    );
  }

  private getAsOfDateTime(): JSX.Element | null {
    
    if (typeof this.state.statusOverview[0].asOfDateTime === 'undefined' || !this.state.statusOverview[0].asOfDateTime) {
      return null;
    }
    
    return (
      <p className={style['as-of-date-time']}>As of {this.state.statusOverview[0].asOfDateTime}</p>
    );
  }

  private getSocialMediaButtons(): JSX.Element | null {
    
    if (! isSSR()) {
      return (
        <div className={style['social-media-buttons']}>
          <TweetButton href={this.state.pageUrl} />
          <ShareButton href={this.state.pageUrl} />
        </div>
      );
    }
    
    return null;
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-status-overview-component" className={style['container']}>
        {this.getStatusOverview()}
        {this.getConfirmCases()}
        {this.getAsOfDateTime()}
        {this.getSocialMediaButtons()}
      </div>
    );
  }
}
