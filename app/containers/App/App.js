/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/home';
import About from '../pages/AboutPage/about';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LoginPage from "../pages/LoginPage/";
 
// import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - RatingNg"
      defaultTitle="Rating.Ng"
    >
      <meta name="description" content="Rate products, service and experience" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About } />
      <Route path="/dashboard" component={LoginPage } />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
