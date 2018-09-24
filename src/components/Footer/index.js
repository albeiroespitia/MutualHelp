import React from "react";
import ReactDOM from "react-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer blue darken-1">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <h5>
                <i className="far fa-handshake" /> Mutual Help
              </h5>
              <big>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                earum magni unde natus, non dignissimos modi consequatur neque
                quae itaque porro aspernatur velit dolor quos laboriosam.
                Expedita, officiis quia eius.
              </big>
            </div>
            <div className="col s12 offset-m1 m5">
              <h5>
                <i className="fas fa-code" /> Desarrolladores
              </h5>
              <div className="padding-left">
                <big>
                  <ul>
                    <li>
                      <i className="fas fa-user-tie" /> Adalberto Avila
                    </li>
                    <li>
                      <i className="fas fa-user-tie" /> Luis Deluque
                    </li>
                    <li>
                      <i className="fas fa-user-tie" /> Albeiro Espitia
                    </li>
                    <li>
                      <i className="fas fa-user-tie" /> Samir Mejia
                    </li>
                    <li>
                      <i className="fas fa-user-tie" /> Aramis Ortega
                    </li>
                  </ul>
                </big>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container white-text">
            Universidad del Magdalena © 2018 Copyright
            <a
              className="grey-text text-lighten-4 right"
              href="http://materializecss.com/footer.html"
            >
              Materialize
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
