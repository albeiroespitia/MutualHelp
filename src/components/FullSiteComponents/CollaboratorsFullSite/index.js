import React from "react";
import ReactDOM from "react-dom";
import UpgradePro from "../../UpgradePro";
import Header from '../../Header';
import CardCollaborator from "../../CardCollaborator";
import './index.css';

export default class CollaboratorsFullSite extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            actualUser : {},
            compatibleUsers: []
        }
        this.listUsers = this.listUsers.bind(this);
        this.getActualUser = this.getActualUser.bind(this);
        this.divideUsers = this.divideUsers.bind(this);
    }

    componentDidMount(){
        this.listUsers();
    }

    async listUsers(){
        let _this = this;
        let temporalArray;
        let response = await fetch('api/usersAll',{
            method: 'POST',
        })
        let data = await response.json();
        temporalArray = data.user;

        let response2 = await fetch('api/collaboratorsAll',{
            method: 'POST',
        })
        let data2 = await response2.json();

        let response4 = await fetch('api/helpRequestAll',{
            method: 'POST',
        })
        let data4 = await response4.json();

        temporalArray.forEach(async function(element,idx){
            data2.collaborator.forEach(async function(element2,idx2){
                if(element._id == element2.user[0]){
                    let response3 = await fetch('api/subjectById',{
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({id:element2.subject[0]}),
                    })
                    let data3 = await response3.json();
                    temporalArray[idx].materiaPro = data3.subject.name;
                    _this.setState({users:temporalArray})
                }
            })
        })

        temporalArray.forEach(async function(element,idx){
            data4.helpRequest.forEach(async function(element2,idx2){
                if(element._id == element2.user[0]){
                    let response5 = await fetch('api/subjectById',{
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({id:element2.subject[0]}),
                    })
                    let data5 = await response5.json();
                    temporalArray[idx].materiaNoob = data5.subject.name;
                    _this.setState({users:temporalArray})
                    _this.getActualUser();
                }
            })
        })

    }

    getActualUser(){
        let _this = this;
        let actualUserData = this.state.users.find( item =>{
            return item.email == sessionStorage.getItem('email');
        })
        this.setState({actualUser:actualUserData})
        setTimeout(function(){
            _this.divideUsers();
        },100)
    }

    divideUsers(){
        let temporalArray = this.state.users;
        let temporalArrayCompatible = [];
        this.state.users.map((element,idx)=>{
            if(element.materiaPro == this.state.actualUser.materiaNoob){
                let user = temporalArray.splice(idx,1)[0];
                temporalArrayCompatible.push(user);
                this.setState({compatibleUsers:temporalArrayCompatible});
            }
        })
    }

    render() {
        return (
          <div>
        	<Header logged={true}/>
            <br />
            <div className="container c2">
              <div className="row">
                <div className="col s12 l9">
                    <div className="row">
                        <div className="col l1"></div>
                        <hr className="separador col l3"/>
                        <span className="col l4">Usuarios compatibles contigo</span>
                        <hr className="separador col l3"/>
                        <div className="col l1"></div>
                    </div>
                    {
                        this.state.compatibleUsers.map(function(user,idx){
                            return <CardCollaborator key={idx} user={user} />
                        })
                    }
                    <div className="row">
                        <div className="col l1"></div>
                        <hr className="separador col l3"/>
                        <span className="col l4">Todos los usuarios</span>
                        <hr className="separador col l3"/>
                        <div className="col l1"></div>
                    </div>
                    {
                        this.state.users.map(function(user,idx){
                            return <CardCollaborator key={idx} user={user} />
                        })
                    }

                </div>
                <UpgradePro />
              </div>
            </div>
          </div>
        );
    }
}
