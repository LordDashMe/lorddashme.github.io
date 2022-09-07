import React, { Component, ReactNode } from 'react';

import './Layout.scss';

interface LayoutProps {
  children?: ReactNode
}

export default class Layout extends Component<LayoutProps> {

  public render(): JSX.Element {

    return (
      <main>{this.props.children}</main>
    );
  }
}
