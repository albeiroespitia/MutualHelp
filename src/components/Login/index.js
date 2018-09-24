import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

export default class Login extends React.Component{
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
							                 <input type="text" name="email" id="email"/>
							                 <label for="email">Correo electronico</label>
						            </div>
                        <div className="input-field">
							                 <input type="password" name="password" id="password"/>
							                 <label for="password">Contraseña</label>
						            </div>
                        <div className="center">
                            <br/>
                            <a href="pages/home.html" className="btn waves-effect blue btn-large">Entrar</a>
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
