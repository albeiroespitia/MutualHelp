import React from "react";
import ReactDOM from "react-dom";
import UpgradePro from "../../UpgradePro";
import CardCollaborator from "../../CardCollaborator";

export default class CollaboratorsFullSite extends React.Component {
  render() {
    return (
      <div>
        <div className="container c2">
          <div className="row">
            <CardCollaborator />
            <UpgradePro />
          </div>
        </div>
      </div>
    );
  }
}
