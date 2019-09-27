import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
// import Projects from './pages/Projects/Projects';
import NotFound from './pages/NotFound/NotFound';
import ComingSoon from './pages/ComingSoon/ComingSoon';

import './index.scss';

import * as serviceWorker from './serviceWorker';

const AppStarter = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/projects" component={ComingSoon}></Route>
        <Route path="/notfound" component={NotFound} />
        <Redirect to="/notfound" />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<AppStarter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
