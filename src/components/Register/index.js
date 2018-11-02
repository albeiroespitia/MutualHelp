import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from 'axios';

export default class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
        name : '',
        lastname: '',
        email : '',
        password: ''
    })
    this.registerHandler = this.registerHandler.bind(this);
  }

  handleChange (event) {
      this.setState({[event.target.name]:event.target.value})
  }

  registerHandler(){
    axios({
        method: 'POST',
        url: 'api/signup',
        data: {'name':this.state.name,'lastname':this.state.lastname,'email':this.state.email,'password':this.state.password},
    }).then(function(response){
        window.location.href='/login';
    }).catch(function (error) {
        console.log(error);
        //document.getElementsByClassName('errorLogin')[0].style.display = 'block';
    });
  }

  render() {
    return (
      <div class="container">
        <div class="row no-mpadd">
          <div class="col s12 offset-m3 m6">
            <br />
            <div class="hide-on-small-only">
              <br />
            </div>
            <div class="card-panel z-depth-3 pdd40">
              <div class="row center">
                <h5>Formulario de Registro</h5>
              </div>
              <div class="input-field col s12 m6">
                <input value={this.state.name} onChange={event => this.handleChange(event)} type="text" name="name" id="nombre" />
                <label for="nombre">Nombre</label>
              </div>
              <div class="input-field col s12 m6">
                <input value={this.state.lastname} onChange={event => this.handleChange(event)} type="text" name="lastname" id="apellido" />
                <label for="apellido">Apellido</label>
              </div>
              <div class="input-field col s12">
                <input value={this.state.email} onChange={event => this.handleChange(event)} type="text" name="email" id="email" />
                <label for="email">Correo electronico</label>
              </div>
              <div class="input-field col s12">
                <input value={this.state.password} onChange={event => this.handleChange(event)} type="password" name="password" id="password" />
                <label for="password">Contraseña</label>
              </div>
              <div class="center">
                <br />
                <a onClick={this.registerHandler} class="btn waves-effect blue btn-large">
                  Crear cuenta
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 offset-m3 m6">
            <div class="card-panel center">
              <big>
                Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a>
              </big>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
