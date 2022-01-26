import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar/>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// container > row
// row > col - container
// col > row