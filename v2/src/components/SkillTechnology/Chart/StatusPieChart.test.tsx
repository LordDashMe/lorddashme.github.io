import React from 'react';
import ReactDOM from 'react-dom';
import StatusPieChart from './StatusPieChart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusPieChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});
