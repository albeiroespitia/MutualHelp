import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default class CardCollaborator extends React.Component {
  constructor(props){
      super(props);
  }
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
              <b>{this.props.user.name} {this.props.user.lastname}</b>
            </big>
          </div>
          <div>Puede ayudarte en {this.props.user.materiaPro}</div>
          <div>Necesita ayuda en {this.props.user.materiaNoob}</div>
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
