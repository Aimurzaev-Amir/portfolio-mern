import React from "react";
import { connect } from "react-redux";
import CreateNewWorkReduxForm from "./WorkSpaceNewWork";
import {
  changePhoto,
  changeBackground,
  changePreview,
  setMobileImg,
  setColor,
  setWhatIDid,
} from "../../../../Redux/WorksReducer";

const WorkSpaceNewWorkContainer = (props) => {
  const setWork = (formData) => {
    // return console.log(formData);
  };

  return (
    <CreateNewWorkReduxForm
      work={props.newWork}
      onSubmit={setWork}
      changePhoto={props.changePhoto}
      changeBackground={props.changeBackground}
      changePreview={props.changePreview}
      setMobileImg={props.setMobileImg}
      setColor={props.setColor}
      setWhatIDid={props.setWhatIDid}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    newWork: state.works.newWork,
  };
};

export default connect(mapStateToProps, {
  changePhoto,
  changeBackground,
  changePreview,
  setMobileImg,
  setColor,
  setWhatIDid,
})(WorkSpaceNewWorkContainer);
