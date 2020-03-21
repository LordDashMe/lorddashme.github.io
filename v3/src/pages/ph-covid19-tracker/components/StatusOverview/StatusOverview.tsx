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
  sys_id: string;
  label: string;
  count: number;
  color: string;
}

export default class StatusOverview extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
    
    this.state = {
      loader: true,
      statusOverview: [
        {
          id: 'id_confirmed_cases',
          sys_id: 'confirmed_cases',
          label: 'CONFIRMED CASES',
          count: 0,
          color: '#6f6f6f'
        },
        {
          id: 'id_infected',
          sys_id: 'infected',
          label: 'INFECTED',
          count: 0,
          color: '#e29e01'
        },
        {
          id: 'id_recovered',
          sys_id: 'recovered',
          label: 'RECOVERED',
          count: 0,
          color: '#60a138'
        },
        {
          id: 'id_deaths',
          sys_id: 'deaths',
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
      .then(querySnapshot => { 
        const statusOverview = querySnapshot.docs.map((doc): IStatusOverview => {
          const document = doc.data();
          return {
            id: doc.id,
            sys_id: document.sys_id,
            label: document.label,
            count: document.count,
            color: document.color
          };
        });
        this.setState({
          statusOverview: statusOverview,
          loader: false
        });
      });
  }

  private getStatusOverview(): Array<JSX.Element> {
    return this.state.statusOverview.map((statusOverview: IStatusOverview) => {
      const countStyle = {
        'color': statusOverview.color
      };
      return (
        <div key={statusOverview.id} className={style['status-overivew-items'] + ' ' + statusOverview.sys_id}>
          <h2>{statusOverview.label}</h2>
          <p style={countStyle}>
            <AnimateNumber value={statusOverview.count} />
          </p>
        </div>
      );
    });
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-status-overview-component" className={style['container']}>
        <Loader visibility={this.state.loader}/>
        <div className={style['status-overview']}>
          {this.getStatusOverview()}
        </div>
      </div>
    );
  }
}
