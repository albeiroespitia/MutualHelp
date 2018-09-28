import React from "react";
import ReactDOM from "react-dom";
import Register from '../../Register';
import './index.css';
import Header from '../../Header';

export default class RegisterFullSite extends React.Component{
  render(){
    return(
      <div>
        <Header></Header>
        <Register></Register>
      </div>
    );
  }
}
