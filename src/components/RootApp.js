import React from 'react';
import './style.css';
import Login from './Login';
import Home from './views/Home';
import Carrier from './views/carrier';
import Footer from './views/Footer';
import About from './views/about';
import { connect } from 'react-redux';
import NavBar from './views/navbar';
import './rootappstyle.css';

import {
    HashRouter as Router,
    Switch,
    Route, Redirect
  } from "react-router-dom";

class RootAppComp extends React.Component {
     render(){
         console.log('login..111..', this.props.login);
         return(
            <div className="rootcontainer">
    <Router>
    <NavBar />
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/carrier" component={Carrier} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" compponent={Login}>
          <Redirect to="/Login" />
        </Route>
      </Switch>
      </Router>
    </div>   
         )
     }
 }

 const mapStateToProps = function(state) {
    return {
      login: state.login
    }
  }

  const RootApp = connect(
    mapStateToProps, null
  )(RootAppComp);

  export default RootApp;