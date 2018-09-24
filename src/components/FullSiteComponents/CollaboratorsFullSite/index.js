import React from "react";
import ReactDOM from "react-dom";
import UpgradePro from "../../UpgradePro";
import CardCollaborator from "../../CardCollaborator";

export default class CollaboratorsFullSite extends React.Component {
  render() {
    return (
      <div>
        <br />
        <div className="container c2">
          <div className="row">
            <div className="col s12 l9">
              <CardCollaborator />
              <CardCollaborator />
              <CardCollaborator />
              <CardCollaborator />
              <CardCollaborator />
              <CardCollaborator />
            </div>
            <UpgradePro />
          </div>
        </div>
      </div>
    );
  }
}
