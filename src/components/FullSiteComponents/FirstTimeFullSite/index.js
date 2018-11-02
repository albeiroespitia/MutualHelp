import React from "react";
import ReactDOM from "react-dom";
import UpgradePro from "../../UpgradePro";
import "./index.css";
import Header from '../../Header';
import axios from 'axios'
import {Row, Input} from 'react-materialize'
import { history } from '../../routing';


export default class FirstTimeFullSite extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      programs: [],
      subjects: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
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

  handleChange(e){
    this.setState({[e.target.id]:e.target.value});
  }

  handleForm(){
    let _this = this;
    let sendData = {
      email: sessionStorage.getItem("email"),
      asignaturaBueno : this.state.asignaturaBueno,
      asignaturaMalo : this.state.asignaturaMalo,
      temasAyuda : this.state.temasAyuda
    }


    axios({
      method: 'POST',
      url : '/api/setCollaborator',
      data: sendData
    }).then(function(response){
      console.log(response)
      _this.makeFirstTime();
    })

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
      console.log(error);
      sessionStorage.setItem("firstimemade","false");
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
                <Input onChange={this.handleChange} id="programa" s={12} type='select' label="De que programa eres?" defaultValue='default'>
                  <option disabled value='default'>Seleccione</option>
                  {
                    this.state.programs.map((program,idx) => {
                      return <option value={program._id} key={idx}>{program.name}</option>
                    })
                  }
                </Input>
                <Input onChange={this.handleChange} id="asignaturaMalo" s={6} type='select' label="En que asignatura necesitas ayuda?" defaultValue='default'>
                  <option disabled value='default'>Seleccione</option>
                  {
                    this.state.subjects.map((subject,idx) => {
                      return <option value={subject._id} key={idx}>{subject.name}</option>
                    })
                  }
                </Input>
                <Input id="asignaturaBueno" onChange={this.handleChange} s={6} type='select' label="En que asignatura eres bueno?" defaultValue='default'>
                  <option disabled value='default'>Seleccione</option>
                  {
                    this.state.subjects.map((subject,idx) => {
                      return <option value={subject._id} key={idx}>{subject.name}</option>
                    })
                  }
                </Input>
                <Input onChange={this.handleChange} id="temasAyuda" s={12} label="En que temas necesitas ayuda?" type='textarea' />
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
                  className="btn waves-effect blue btn-large"
                  onClick={this.handleForm}
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
