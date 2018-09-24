import React from 'react';
import render from 'react-dom';
import { BrowserRouter, Route, IndexRoute, Redirect } from 'react-router-dom';
import LoginFullSite from '../components/FullSiteComponents/LoginFullSite';
import RegisterFullSite from '../components/FullSiteComponents/RegisterFullSite';
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
							<Footer></Footer>
        		</div>
    		</BrowserRouter>
		);
	}
};
