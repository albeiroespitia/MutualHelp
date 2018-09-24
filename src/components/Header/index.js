import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as $ from 'jquery';

export default class Header extends React.Component{
  render(){
    return(
      <nav>
          <div className="nav-wrapper blue">
              <div className="container">
                  <a href="#" className="brand-logo hide-on-small-only">
                      <i className="far fa-handshake fa-lg"></i> Mutual Help
                  </a>
                  <a href="#" data-activates="mobile" className="button-collapse">
                      <i className="fas fa-bars fa-lg"></i>
                  </a>
                  <ul className="right hide-on-med-and-down">
                      <li><a href="views/register.html">Sign in</a></li>
                      <li><a href="views/login.html">Login</a></li>
                  </ul>
                  <ul className="side-nav" id="mobile">
                      <li><a href="views/register.html">Sign in</a></li>
                      <li><a href="views/login.html">Login</a></li>
                  </ul>
              </div>
          </div>
		  </nav>
    );
  }
}
