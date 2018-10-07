import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import axios from 'axios';
import { history } from '../routing';



export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            email : '',
            password: ''
        })
        this.makeFirstTime = this.makeFirstTime.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }

    makeFirstTime(){
		console.log("entro");
		let _this = this;
		axios({
			method: 'POST',
			data : {email : sessionStorage.getItem('email')},
			url: 'api/checkFirstTime'
		}).then(function(response){
			console.log(response);
			if(response.status == 200){
				sessionStorage.setItem("firstimemade","true");
			}else{
                sessionStorage.setItem("firstimemade","false");
            }
            history.push('/home');
		}).catch(function(error){
            sessionStorage.setItem("firstimemade","false");
            history.push('/home');
		})
    }
    
    handleChange (event) {
        this.setState({[event.target.name]:event.target.value})
    }

    loginHandler(){
        let _this = this;
        axios({
            method: 'POST',
            url: 'api/login',
            data: {'email':this.state.email,'password':this.state.password},
        }).then(function(response){
            sessionStorage.setItem('logged','true');
            sessionStorage.setItem('email',_this.state.email);
            _this.makeFirstTime();
        }).catch(function (error) {
            document.getElementsByClassName('errorLogin')[0].style.display = 'block';
        });
    }

    render(){
        return(
        <div className="container">
            <div className="row no-mpadd">
                <div className="col s12 offset-m3 m6">
                    <br/>
                    <div className="hide-on-small-only"><br/></div>
                    <div className="card-panel z-depth-3 pdd40">
                        <div className="row center">
                            <h5>Inicia Sesión</h5>
                        </div>
                        <div className="input-field">
                            <input value={this.state.email} onChange={event => this.handleChange(event)} type="text" name="email" id="email"/>
                            <label htmlFor="email">Correo electronico</label>
                        </div>
                        <div className="input-field">
                            <input value={this.state.password} onChange={event => this.handleChange(event)} type="password" name="password" id="password"/>
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        <div className="center">
                            <p className="red-text errorLogin">Papu esa wea no era el email</p>
                            <br/>
                            <a onClick={this.loginHandler} className="btn waves-effect blue btn-large">Entrar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 offset-m3 m6">
                    <div className="card-panel center">
                        <big>Aun no tienes una cuenta? <a href="pages/register.html">Crear Cuenta</a></big>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
