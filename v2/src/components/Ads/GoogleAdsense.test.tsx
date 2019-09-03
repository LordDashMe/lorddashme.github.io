import React from 'react';
import ReactDOM from 'react-dom';
import GoogleAdsense from './GoogleAdsense';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoogleAdsense />, div);
  ReactDOM.unmountComponentAtNode(div);
});
