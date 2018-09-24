import React from "react";
import ReactDOM from "react-dom";
import './index.css';

export default class UpgradePro extends React.Component {
  render() {
    return (
      <div className="card-panel z-depth-3 pdd40 col s12 m3">
        <div className="row">
          <big>
            <b>Necesitas ayuda en mas de una asignatura?</b>
          </big>{" "}
          <br />
          <big>
            No esperes más para pasar tu cuenta a <b>PRO  </b>
            y asi acceder a todos sus beneficios. <br />
            Adquierela ahora mismo
          </big>
        </div>
        <button className="btn waves-effect blue">comprar PRO</button>
      </div>
    );
  }
}
