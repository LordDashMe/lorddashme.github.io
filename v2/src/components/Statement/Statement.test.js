import React from 'react';
import ReactDOM from 'react-dom';
import Statement from './Statement';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Statement />, div);
  ReactDOM.unmountComponentAtNode(div);
});
