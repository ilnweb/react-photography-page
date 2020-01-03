import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Header from './components/header/header.cmp';

import HomePage from './pages/homepage/homepage.cmp';
import PortfolioPage from './pages/portfolio/portfolio.cmp';
import AboutPage from './pages/about/about.cmp';
import ContactPage from './pages/contact/contact.cmp';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
        
    }    
  }

  

  render() {
    return (
      <div className="App">
        <Header  />
        <Switch>
          <Route exact path='/' component={() => <HomePage handleClick={this.handleClick} />} />
          <Route exact path='/Portfolio/:title' component={PortfolioPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
