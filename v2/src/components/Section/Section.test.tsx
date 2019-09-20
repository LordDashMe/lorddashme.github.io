import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Section id="test" title="TEST" showThematicBreak={true} showBorderTop={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
