import React from 'react';
import ReactDOM from 'react-dom';
import ComingSoon from './ComingSoon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComingSoon />, div);
  ReactDOM.unmountComponentAtNode(div);
});
