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
import { useHttp } from "../../../../hooks/http.hook";

const WorkSpaceNewWorkContainer = (props) => {
  const { loading, error, request } = useHttp();

  const createWorkItem = async (formData) => {
    // console.log(formData)
    try {
      // const worksLength = await request("/api/works/create", "POST", { id: 9, ...formData });
      await request("/api/works/create", "POST", { id: 0, ...formData });
    } catch (e) {}
  };

  const updateWorkItem = async (formData) => {
    // console.log(formData)
    try {
      await request("/api/works/0", "PATCH", { ...formData });
    } catch (e) {}
  };

  return (
    <CreateNewWorkReduxForm
      work={props.newWork}
      onSubmit={updateWorkItem}
      // updateWorkItem={updateWorkItem}
      // createWorkItem={createWorkItem}
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
    token: state.admin.token,
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
