import React from 'react';
import ReactDOM from 'react-dom';
import PageInformation from './PageInformation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageInformation id="" 
                                   pageTitle=""
                                   title="" 
                                   primaryIcon="" 
                                   description="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
