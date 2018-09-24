import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default class Register extends React.Component {
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
                <input type="text" name="nombre" id="nombre" />
                <label for="nombre">Nombre</label>
              </div>
              <div class="input-field col s12 m6">
                <input type="text" name="apellido" id="apellido" />
                <label for="apellido">Apellido</label>
              </div>
              <div class="input-field col s12">
                <input type="text" name="email" id="email" />
                <label for="email">Correo electronico</label>
              </div>
              <div class="input-field col s12">
                <input type="password" name="password" id="password" />
                <label for="password">Contraseña</label>
              </div>
              <div class="center">
                <br />
                <a href="home.html" class="btn waves-effect blue btn-large">
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
                Ya tienes una cuenta? <a href="../index.html">Iniciar Sesión</a>
              </big>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
