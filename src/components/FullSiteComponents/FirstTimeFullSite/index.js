import React from "react";
import ReactDOM from "react-dom";
import UpgradePro from "../../UpgradePro";
import "./index.css";
import Header from '../../Header';
import axios from 'axios'
import {Row, Input} from 'react-materialize'

export default class FirstTimeFullSite extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      programs: [],
      subjects: []
    }
  }

  componentDidMount(){           
    let _this = this;
    axios({
      method: 'POST',
      url: 'api/program'
    }).then(function(response){
      _this.setState({programs:response.data.program})
    }).catch(function(error){
      console.log(error);
    })

    axios({
      method: 'POST',
      url: 'api/subject'
    }).then(function(response){
      _this.setState({subjects:response.data.subject})
    }).catch(function(error){
      console.log(error);
    })
  }
  render() {
    return (
      <div>
      <Header logged={true}/>
      <div className="container c2">
        <br/>
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
                <Input s={12} type='select' label="De que programa eres?" defaultValue='default'>
                  <option disabled value='default'>Seleccione</option>
                  {
                    this.state.programs.map((program,idx) => {
                      return <option value={program._id} key={idx}>{program.name}</option>
                    })
                  }
                </Input>
                  <Input s={6} type='select' label="En que asignatura necesitas ayuda?" defaultValue='default'>
                    <option disabled value='default'>Seleccione</option>
                    {
                      this.state.subjects.map((subject,idx) => {
                        return <option value={subject._id} key={idx}>{subject.name}</option>
                      })
                    }
                  </Input>
                  <Input s={6} type='select' label="En que asignatura eres weno papu?" defaultValue='default'>
                    <option disabled value='default'>Seleccione</option>
                  {
                    this.state.subjects.map((subject,idx) => {
                      return <option value={subject._id} key={idx}>{subject.name}</option>
                    })
                  }
                </Input>
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
      </div>
    );
  }
}
