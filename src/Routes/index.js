import React from 'react';
import render from 'react-dom';
import { BrowserRouter, Route, IndexRoute, Redirect } from 'react-router-dom';
import LoginFullSite from '../components/FullSiteComponents/LoginFullSite';
import RegisterFullSite from '../components/FullSiteComponents/RegisterFullSite';
import FirstTime from '../components/FullSiteComponents/FirstTimeFullSite';
import CollaboratorsFullSite from '../components/FullSiteComponents/CollaboratorsFullSite';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default class Rutas extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<div>
							<Header></Header>
        			<Route exact path="/" />
        			<Route path="/register" component={RegisterFullSite}/>
        			<Route path="/login"  component={LoginFullSite}/>
							<Route path="/firsttime"  component={FirstTime}/>
							<Route path="/home"  component={CollaboratorsFullSite}/>
							<Footer></Footer>
        		</div>
    		</BrowserRouter>
		);
	}
};
