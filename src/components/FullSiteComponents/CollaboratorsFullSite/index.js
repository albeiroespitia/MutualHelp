import React from "react";
import ReactDOM from "react-dom";
import UpgradePro from "../../UpgradePro";
import Header from '../../Header';
import CardCollaborator from "../../CardCollaborator";

export default class CollaboratorsFullSite extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    async componentDidMount(){
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
                }
            })
        })

        setTimeout(function(){

        },3000);



    }

    render() {
        return (
          <div>
        	<Header logged={true}/>
            <br />
            <div className="container c2">
              <div className="row">
                <div className="col s12 l9">
                    {
                        this.state.users.map(function(user,idx){
                            console.log(user);
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
