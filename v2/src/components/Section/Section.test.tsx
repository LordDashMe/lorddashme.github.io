import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Section />, div);
  ReactDOM.unmountComponentAtNode(div);
});
