import React from "react";
import PortfolioPage from "./PortfolioPage";
import { connect } from "react-redux";
import { setWorkId } from "../../Redux/WorksReducer";

let PortfolioPageContainer = (props) => {
  return (
    <div>
      <PortfolioPage works={props.works} setWorkId={props.setWorkId}/>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    works: state.works.Works,
    currentWorkId: state.works.currentWorkId,
  };
};

export default connect(mapStateToProps, { setWorkId })(PortfolioPageContainer);
