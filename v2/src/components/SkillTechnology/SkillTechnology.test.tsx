import React from 'react';
import ReactDOM from 'react-dom';
import SkillTechnology from './SkillTechnology';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillTechnology />, div);
  ReactDOM.unmountComponentAtNode(div);
});
