import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Page404 from './pages/Page404/Page404';

import './index.scss';

import * as serviceWorker from './serviceWorker';

const AppStarter = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/404" component={Page404} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<AppStarter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
