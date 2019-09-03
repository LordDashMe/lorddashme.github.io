import React from 'react';
import ReactDOM from 'react-dom';
import Ads from './Ads';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ads />, div);
  ReactDOM.unmountComponentAtNode(div);
});
