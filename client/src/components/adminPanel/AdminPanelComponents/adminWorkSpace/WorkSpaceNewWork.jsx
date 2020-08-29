import React, { useState, useEffect } from "react";
import "../../Admin.css";
import mainImg from "../../img/mainImgExample.png";
import HeaderOFWork from "./NewWorkComponents/HeaderOfWork";
import WorkOverviewEdit from "./NewWorkComponents/WorkOverviewEdit";
import WorkDetailsEdit from "./NewWorkComponents/WorkDetailesEdit";
import WorkImagesEdit from "./NewWorkComponents/WorkImagesEdit";
import SendImageToDatabase from "./NewWorkComponents/FilePondWorks";
import { useHttp } from "../../../../hooks/http.hook";

const WorkSpaceNewWork = (props) => {
  const onChangeMobileImg = (e) => {
    // props.setMobileImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const { loading, error, request } = useHttp();
  useEffect(() => {
    const getImages = async () => {
      const images = await request("/api/works/getPhotos/workPhoto", "GET", null);
      props.setImagesData(images);
    };
    getImages();
  }, []);

  const imagesData = props.images.map((image) => {
    const imgSrc = `data:${image.imgType};charset=utf-8;base64,${image.img.toString("base64")}`;
    return <img key={image.name} src={imgSrc} />;
  });
  return (
    <div>
      <HeaderOFWork
        work={props.work}
        createWorkItem={props.createWorkItem}
        updateWorkItem={props.updateWorkItem}
        onChangePhoto={props.onChangePhoto}
        onChangeBackground={props.onChangeBackground}
        onChangePreview={props.onChangePreview}
      />
      <div className="workDescriber">
        <div className="workMainLogo">
          <img src={props.work.workPhoto || mainImg} alt={props.work.photoDescription} />
        </div>
        <div className="workMainInfo wrapper">
          <WorkOverviewEdit
            work={props.work}
            createWorkColor={props.createWorkColor}
            createWorkStyle={props.createWorkStyle}
            onColorChange={props.onColorChange}
            updateWorkItem={props.updateWorkItem}
          />
          <WorkDetailsEdit
            work={props.work}
            onPointChange={props.onPointChange}
            createWorkDidPoint={props.createWorkDidPoint}
            updateWorkItem={props.updateWorkItem}
          />
        </div>
      </div>
      <SendImageToDatabase  />
      <div>{imagesData}</div>
      {/* <WorkImagesEdit work={props.work} onChangeMobileImg={onChangeMobileImg} /> */}
      {loading ? "loading..." : null}
    </div>
  );
};

export default WorkSpaceNewWork;
