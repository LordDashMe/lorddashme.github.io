import React from 'react';
import ReactDOM from 'react-dom';
import CareerHistory from './CareerHistory';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CareerHistory />, div);
  ReactDOM.unmountComponentAtNode(div);
});
