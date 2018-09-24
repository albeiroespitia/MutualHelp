import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default class CardCollaborator extends React.Component {
  render() {
    return (
      <div className="card-panel z-depth-3 waves-effect waves-blue card-colaborador">
        <div className="col offset-s4 s4 m2">
          <img
            alt="laweapapu"
            src="https://api.fnkr.net/testimg/200x200/2196f3/FFF/?text=MH"
            className="responsive-img circle"
          />
        </div>
        <div className="col s8 m10">
          <div>
            <big>
              <b>Nombre Apellido</b>
            </big>
          </div>
          <div>Puede ayudarte en Programación</div>
          <div>
            En estos horarios <div className="chip">Lunes 8-10 am</div>
            <div className="chip">Martes 2-4 pm</div>
          </div>
        </div>
        <div className="right">
          <a href="colaboladores.html" className="btn waves-effect blue">
            Contactar
          </a>
        </div>
      </div>
    );
  }
}
