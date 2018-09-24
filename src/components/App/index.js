import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Login from '../Login'
import './index.css'

export default class App extends React.Component{
  render(){
    return (
      <div>
        <Header></Header>
        <Login></Login>
      </div>
    );
  }
}
