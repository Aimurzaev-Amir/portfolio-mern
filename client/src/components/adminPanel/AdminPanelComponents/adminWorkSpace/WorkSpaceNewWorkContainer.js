import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import WorkSpaceNewWork from "./WorkSpaceNewWork";
import {
  setColor,
  setWhatIDid,
  setWork,
  setWorkId,
  setStyle,
  setImagesData,
} from "../../../../Redux/WorksReducer";
import { useHttp } from "../../../../hooks/http.hook";

const WorkSpaceNewWorkContainer = (props) => {
  const { loading, error, request } = useHttp();
  useEffect(() => {
    const getLastWorkData = async () => {
      const worksData = await request("/api/works", "GET", null);
      props.setWork(worksData);
      if (worksData.length != 0 || props.allWork.length != 0) {
        const currentWorkId = worksData[worksData.length - 1]._id;
        props.setWorkId(currentWorkId);
        const worksColors = await request(`/api/works/colors/${currentWorkId}`, "GET", null);
        props.setColor(worksColors);
        const worksStyles = await request(`/api/works/textStyles/${currentWorkId}`, "GET", null);
        props.setStyle(worksStyles);
        const whatIDid = await request(`/api/works/didPoint/${currentWorkId}`, "GET", null);
        props.setWhatIDid(whatIDid);
      }
    };
    getLastWorkData();
  }, []);

  let [color, setColor] = useState(null);
  const onColorChange = (e) => {
    setColor(e.currentTarget.value);
  };

  const [mainImg, setMainImg] = useState(null);
  const [mainPreview, setMainPreview] = useState(null);
  const [mainBackground, setMainBackground] = useState(null);

  const createWorkItem = async (formData) => {
    try {
      const createWorkData = await request("/api/works/create", "POST", {
        ...formData,
      });
      const worksData = await request("/api/works", "GET", null);
      props.setWork(worksData);
    } catch (e) {}
  };

  const updateWorkItem = async (formData) => {
    try {
      const worksData = await request("/api/works", "GET", null);
      const updatedData = await request(
        `/api/works/${worksData[worksData.length - 1]._id}`,
        "PATCH",
        {
          ...formData,
        }
      );
    } catch (e) {}
  };

  const createWorkColor = async (formData) => {
    try {
      const worksData = await request("/api/works", "GET", null);
      const currentWorkId = worksData[worksData.length - 1]._id;
      props.setWorkId(currentWorkId);
      const createColor = await request("/api/works/create-color", "POST", {
        id: currentWorkId,
        color: color,
      });
    } catch (e) {}
  };

  const createWorkStyle = async (formData) => {
    try {
      const worksData = await request("/api/works", "GET", null);
      const currentWorkId = worksData[worksData.length - 1]._id;
      props.setWorkId(currentWorkId);
      const createStyle = await request("/api/works/create-textStyle", "POST", {
        id: currentWorkId,
        ...formData,
      });
    } catch (e) {}
  };

  const createWorkDidPoint = async (formData) => {
    try {
      const worksData = await request("/api/works", "GET", null);
      const currentWorkId = worksData[worksData.length - 1]._id;
      props.setWorkId(currentWorkId);
      await request("/api/works/create-didPoint", "POST", {
        id: currentWorkId,
        ...formData,
      });
    } catch (e) {}
  };

  return (
    <WorkSpaceNewWork
      work={props.newWork}
      images={props.images}
      allWorks={props.allWorks}
      //async req to server
      updateWorkItem={updateWorkItem}
      createWorkItem={createWorkItem}
      createWorkColor={createWorkColor}
      createWorkStyle={createWorkStyle}
      createWorkDidPoint={createWorkDidPoint}
      // my functions
      onColorChange={onColorChange}
      setImagesData={props.setImagesData}
      currentWorkId={props.currentWorkId}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    urlAdress: state.works.newWork.urlAdress,
    token: state.admin.token,
    newWork: state.works.newWork,
    allWorks: state.works.works,
    images: state.works.images,
    currentWorkId: state.works.currentWorkId,
  };
};

export default connect(mapStateToProps, {
  setColor,
  setWhatIDid,
  setWork,
  setWorkId,
  setStyle,
  setImagesData,
})(WorkSpaceNewWorkContainer);
