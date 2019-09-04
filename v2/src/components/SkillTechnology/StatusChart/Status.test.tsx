import React from 'react';
import ReactDOM from 'react-dom';
import StatusChart from './StatusChart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});
