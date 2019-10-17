import React from 'react';
import ReactDOM from 'react-dom';
import PoweredBy from './PoweredBy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PoweredBy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
