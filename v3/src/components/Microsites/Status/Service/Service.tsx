import React, { Component } from 'react';

import style from './Service.module.scss';

interface IProperty {
  name: string;
  features: IServiceFeature[]
}

interface IServiceFeature {
  name: string;
  status: string;
}

interface IState {}

export default class Service extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <div id="status-service-component" className={style['container']}>
        <h2>{this.props.name}</h2>
        <div className={style['features']}>
          {
            this.props.features.map((feature: IServiceFeature): JSX.Element => {
              return (
                <p key={feature.name}>
                  <span className={style[feature.status.toLowerCase()]}>{feature.status}</span> | {feature.name}
                </p>
              );
            })
          }
        </div>
      </div>
    );
  } 
}
