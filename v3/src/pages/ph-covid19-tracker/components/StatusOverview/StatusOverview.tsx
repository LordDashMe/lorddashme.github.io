import React, { Component } from 'react';

import { isSSR } from '../../../../common/helper';

import Firestore from '../../../../components/Database/Firebase/Firestore';
import Loader from '../../../../components/Loader/Loader';

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
      statusOverview: []
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
    return this.state.statusOverview.map((statusOverview) => {
      const countStyle = {
        'color': statusOverview.color
      };
      return (
        <div key={statusOverview.id} className={style['status-overivew-items'] + ' ' + style[statusOverview.id]}>
          <h2>{statusOverview.label}</h2>
          <p style={countStyle}>{statusOverview.count}</p>
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
