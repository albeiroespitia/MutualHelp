import React from 'react';
import render from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router-dom';
import LoginFullSite from '../components/FullSiteComponents/LoginFullSite';
import RegisterFullSite from '../components/FullSiteComponents/RegisterFullSite';
import FirstTime from '../components/FullSiteComponents/FirstTimeFullSite';
import CollaboratorsFullSite from '../components/FullSiteComponents/CollaboratorsFullSite';
import Footer from '../components/Footer';
import { history } from '../components/routing';
import axios from 'axios';

export default class Rutas extends React.Component{
	constructor(props){
		super(props);
		this.requireAuth = this.requireAuth.bind(this)
	}
	requireAuth(){
		if(sessionStorage.getItem('logged')=='true'){
			return true;
		}else{
			return false;
		}
	}
	checkFirstTime(){
		if(sessionStorage.getItem('firstimemade')=='true'){
			console.log('true');
			return true;
		}else{
			return false;
		}
	}
	render(){
		return(
			<Router history={history}>
				<div>
        			<Route exact path="/" render={()=> (
						<Redirect to="/login"/>
					)}/>
					<Route path="/register"  render={()=>(
						this.requireAuth() ? (
							<Redirect to="/home"/>
						):(
							<RegisterFullSite/>
						)
					)} />
					<Route path="/login"  render={()=>(
						this.requireAuth() ? (
							<Redirect to="/home"/>
						):(
							<LoginFullSite/>
						)
					)} />
					<Route path="/firstime"  render={()=>(
						this.requireAuth() ? (
							this.checkFirstTime() ? (
								<Redirect to="/home"/>
							):(
								<FirstTime/>
							)
						):(
							<Redirect to="/login"/>
						)
					)} />
					<Route path="/home"  render={()=>(
						this.requireAuth() ? (
							this.checkFirstTime() ? (
								<CollaboratorsFullSite/>
							):(
								<Redirect to="/firstime"/>
							)
						):(
							<Redirect to="/login"/>
						)
					)} />
					<Footer></Footer>
        		</div>
    		</Router>
		);
	}
};
