import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import WorkSpaceNewWork from "./WorkSpaceNewWork";
import {
  changePhoto,
  changeBackground,
  changePreview,
  setMobileImg,
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
  let [color, setColor] = useState(null);
  const onColorChange = (e) => {
    setColor(e.currentTarget.value);
  };
  const [mainImg, setMainImg] = useState(null);
  const [mainPreview, setMainPreview] = useState(null);
  const [mainBackground, setMainBackground] = useState(null);

  const onChangePhoto = (e) => {
    setMainImg(e.target.files[0]);
  };

  const onChangeBackground = (e) => {
    setMainBackground(e.target.files[0]);
  };
  const onChangePreview = (e) => {
    setMainPreview(e.target.files[0]);
  };

  const getWorkData = async (formData) => {
    try {
      const worksData = await request("/api/works", "GET", null);
      props.setWork(worksData);
      const currentWorkId = worksData[worksData.length - 1]._id;
      props.setWorkId(currentWorkId);
      const worksColors = await request(`/api/works/colors/${currentWorkId}`, "GET", null);
      props.setColor(worksColors);
      const worksStyles = await request(`/api/works/textStyles/${currentWorkId}`, "GET", null);
      props.setStyle(worksStyles);
      const whatIDid = await request(`/api/works/didPoint/${currentWorkId}`, "GET", null);
      props.setWhatIDid(whatIDid);
      
      // const images = await request("/api/works/photos/workPhoto", "GET", null);
      // props.setImagesData(images);

      // const images = await request("/api/works/files", "GET", null);
      // console.log(images);

      // const ImagesArray = images.map((imageData) => {
      //   props.setImagesData({ src: require("../../../../../../" + imageData.fieldname)});
      // });
      // const encodeImage = (mimetype, arrayBuffer) => {
      //   let u8 = new Uint8Array(arrayBuffer);
      //   const b64encoded = btoa(
      //     [].reduce.call(new Uint8Array(arrayBuffer), function (p, c) {
      //       return p + String.fromCharCode(c);
      //     })
      //   );
      //   return "data:" + mimetype + ";base64," + b64encoded;
      // };
      // const ImagesArray = images.map((imageData) => {
      //   const dataURL = encodeImage(imageData.contentType, imageData.image.data);
      //   props.setImagesData({ name: imageData.name, url: dataURL });
      // });
    } catch (e) {}
  };

  const createWorkItem = async (formData) => {
    try {
      const worksData = await request("/api/works", "GET", null);
      props.setWork(worksData);
      const createWorkData = await request("/api/works/create", "POST", {
        ...formData,
      });
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

  const updateWorkPhoto = async (formData) => {
    const data = new FormData();
    data.append("mainImg", mainImg);
    console.log(data);
    console.log(mainImg);
    try {
      // const worksData = await request("/api/works", "GET", null);
      const updatedData = await request(
        "/api/works/uploadPhoto",
        "POST",
        {
          data,
        },
        { "Content-Type": "multipart/form-data" }
        // { "Content-Type": "multipart/form-data" }
      );
    } catch (e) {}
  };

  return (
    <WorkSpaceNewWork
      work={props.newWork}
      images={props.images}
      // work={props.allWorks[props.allWorks.length - 1]}
      onSubmit={createWorkColor}
      //async req to server
      updateWorkItem={updateWorkItem}
      createWorkItem={createWorkItem}
      createWorkColor={createWorkColor}
      createWorkStyle={createWorkStyle}
      createWorkDidPoint={createWorkDidPoint}
      getWorkData={getWorkData}
      updateWorkPhoto={updateWorkPhoto}
      // my functions
      onColorChange={onColorChange}
      onChangePhoto={onChangePhoto}
      onChangeBackground={onChangeBackground}
      onChangePreview={onChangePreview}
      setMobileImg={props.setMobileImg}
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
  };
};

export default connect(mapStateToProps, {
  changePhoto,
  changeBackground,
  changePreview,
  setMobileImg,
  setColor,
  setWhatIDid,
  setWork,
  setWorkId,
  setStyle,
  setImagesData,
})(WorkSpaceNewWorkContainer);
