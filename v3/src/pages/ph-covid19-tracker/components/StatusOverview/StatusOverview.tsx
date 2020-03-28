import React, { Component } from 'react';
import loadable from '@loadable/component';

import { isSSR, loadableFallbackTemplate } from '../../../../common/helper';

import Firestore from '../../../../components/Database/Firebase/Firestore';
import Loader from '../../../../components/Loader/Loader';

const AnimateNumber = loadable(() => import('../../../../components/AnimateNumber/AnimateNumber'), { fallback: loadableFallbackTemplate(`#animate-number-component`) });

import style from './StatusOverview.module.scss';

interface IProperty {}

interface IState {
  loader: boolean;
  statusOverview: IStatusOverview[];
}

interface IStatusOverview {
  id: string;
  sysId: string;
  label: string;
  count: number;
  color: string;
  asOfDateTime?: string;
}

export default class StatusOverview extends Component<IProperty, IState> {

  public constructor(properties: any) {
    
    super(properties);
    
    this.state = {
      loader: true,
      statusOverview: [
        {
          id: 'id_confirmed_cases',
          sysId: 'confirmed_cases',
          label: 'CONFIRMED CASES',
          count: 0,
          color: '#6f6f6f',
          asOfDateTime: 'March 14, 2020 7PM PST'
        },
        {
          id: 'id_active_cases',
          sysId: 'active_cases',
          label: 'ACTIVE CASES',
          count: 0,
          color: '#e29e01'
        },
        {
          id: 'id_recovered',
          sysId: 'recovered',
          label: 'RECOVERED',
          count: 0,
          color: '#60a138'
        },
        {
          id: 'id_deaths',
          sysId: 'deaths',
          label: 'DEATHS',
          count: 0,
          color: '#a13838'
        }
      ]
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
            color: document.color
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
          <div key={statusOverview.id} className={style['status-overivew-items'] + ' ' + statusOverview.sysId}>
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
      <div key={this.state.statusOverview[0].id} className={style['status-overivew-item-confirmed-cases']}>
        <h2>{this.state.statusOverview[0].label}</h2>
        <p style={{'color': this.state.statusOverview[0].color}}>
          <AnimateNumber value={this.state.statusOverview[0].count} isCommaSeparated={true} />
        </p>
      </div>
    );
  }

  private getAsOfDateTime(): JSX.Element {
    
    if (typeof this.state.statusOverview[0].asOfDateTime === 'undefined') {
      return (<div></div>);
    }
    
    return (
      <div className={style['status-overview-as-of-date-time']}>
        <p>As of {this.state.statusOverview[0].asOfDateTime}</p>
      </div>
    );
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-status-overview-component" className={style['container']}>
        <Loader visibility={this.state.loader}/>
        <div className={style['status-overview']}>
          {this.getStatusOverview()}
          {this.getConfirmCases()}
          {this.getAsOfDateTime()}
        </div>
      </div>
    );
  }
}
