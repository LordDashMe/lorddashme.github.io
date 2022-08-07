import React from 'react';

interface IFooterProps {
  page: string;
}

interface IFooterState {}

export default class Footer extends React.Component<IFooterProps, IFooterState> {

  public render(): JSX.Element {
    return (
      <footer>
        <div>Page: {this.props.page}</div>
        <div>Made with Love</div>
      </footer>
    );
  }
}
