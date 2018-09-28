import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom'


export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logged: this.props.logged,
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState({logged: newProps.logged});
    }
    signout(){
        sessionStorage.setItem('logged','false');
    }
    render(){
        let navButtons;
        if(!this.state.logged){
            navButtons = <ul className="right hide-on-med-and-down">
                <li><Link to="/register">Sign in</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            
        }else{
            navButtons = <ul className="right hide-on-med-and-down">
                <li><Link to="/login" onClick={this.signout}>Sign out</Link></li>
            </ul>   
        }
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
                    {navButtons}
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
