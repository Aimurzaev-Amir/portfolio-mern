import React from "react";
import LatestWorks from "./LatestWorks";
import { connect } from "react-redux";

let LatestWorksContainer = (props) => {
  return <LatestWorks works={props.works} params={props.params} />;
};

let mapStateToProps = (state) => {
  return {
    works: state.works.Works,
  };
};

export default connect(mapStateToProps, { })(LatestWorksContainer);
