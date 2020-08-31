import React from "react";
import { connect } from "react-redux";
import Work from "./Work";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

let WorkContainer = (props) => {
  let workName = props.match.params.workName;

  return <Work works={props.works} workName={workName} />;
};

let mapStateToProps = (state) => {
  return {
    works: state.works.Works,
  };
};

export default compose(connect(mapStateToProps, {}), withRouter)(WorkContainer);
