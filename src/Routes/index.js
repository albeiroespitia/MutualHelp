import React from 'react';
import render from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router-dom';
import LoginFullSite from '../components/FullSiteComponents/LoginFullSite';
import RegisterFullSite from '../components/FullSiteComponents/RegisterFullSite';
import FirstTime from '../components/FullSiteComponents/FirstTimeFullSite';
import CollaboratorsFullSite from '../components/FullSiteComponents/CollaboratorsFullSite';
import Footer from '../components/Footer';
import { AuthRoute } from 'react-router-auth';
import { history } from '../components/routing';

export default class Rutas extends React.Component{
	constructor(props){
		super(props);
		this.isLogged = this.isLogged.bind(this)
		this.requireAuth = this.requireAuth.bind(this)

		this.state = {
			isLogged: false
		}
	}
	isLogged(){
		if(sessionStorage.getItem("logged")=='true'){
			return true;
		}else{
			return false;
		}
	}
	requireAuth(){
		if(sessionStorage.getItem('logged')=='true'){
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
							<FirstTime/>
						):(
							<Redirect to="/login"/>
						)
					)} />
					<Route path="/home"  render={()=>(
						this.requireAuth() ? (
							<CollaboratorsFullSite/>
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
