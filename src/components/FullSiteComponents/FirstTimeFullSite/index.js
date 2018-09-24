import React from "react";
import ReactDOM from "react-dom";
import UpgradePro from "../../UpgradePro";
import "./index.css";

export default class FirstTimeFullSite extends React.Component {
  render() {
    return (
      <div className="container c2">
        <div className="row">
          <div className="col s12 m9">
            <div className="card-panel z-depth-3 pdd40">
              <div className="row">
                <h5>Como podemos ayudarte?</h5>
                <big>
                  Completa la siguiente información que nos permitirá ofrecerte
                  un mejor servicio .
                </big>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input type="text" name="programa" id="programa" />
                  <label htmlFor="programa">A que programa perteneces?</label>
                </div>
                <div className="input-field col s12 m6">
                  <input type="text" name="asignatura" id="asignatura" />
                  <label htmlFor="asignatura">
                    En que asignatura necesitas ayuda?
                  </label>
                </div>
                <div className="input-field col s12 m6">
                  <input type="text" name="asignatura2" id="asignatura2" />
                  <label htmlFor="asignatura2">
                    En que asignatura eres bueno?
                  </label>
                </div>
                <div className="input-field col s12">
                  <textarea
                    className="materialize-textarea"
                    name="horarios"
                    id="horarios"
                    rows="2"
                  />
                  <label htmlFor="horarios">
                    Puedes especificar en que temas necesitas ayuda
                  </label>
                </div>
                <div className="padding-left">
                  <label>
                    <big>Indica cuales son tus horarios de disponibilidad</big>
                  </label>
                </div>
                <div className="input-field col s12">
                  <div className="chips chips-initial" />
                </div>
              </div>
              <div className="center">
                <a
                  href="colaboladores.html"
                  className="btn waves-effect blue btn-large"
                >
                  Buscar colaboladores
                </a>
              </div>
            </div>
          </div>
          <UpgradePro />
        </div>
      </div>
    );
  }
}
