import React from "react";
import ReactDOM from "react-dom";
import Login from '../../Login';
import { Redirect } from 'react-router-dom';
import './index.css';
import Header from '../../Header';

export default class LoginFullSite extends React.Component{
  render(){
          return (
          <div>
            <Header></Header>
            <Login></Login>
          </div>
          )
  }
}
