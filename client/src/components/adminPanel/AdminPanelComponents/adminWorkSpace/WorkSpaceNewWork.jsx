import React, { useState, useEffect } from "react";
import "../../Admin.css";
import mainImg from "../../img/mainImgExample.png";
import HeaderOFWork from "./NewWorkComponents/HeaderOfWork";
import WorkOverviewEdit from "./NewWorkComponents/WorkOverviewEdit";
import WorkDetailsEdit from "./NewWorkComponents/WorkDetailesEdit";
import WorkImagesEdit from "./NewWorkComponents/WorkImagesEdit";
import FilePondWorks from "./NewWorkComponents/FilePondWorks";
import { useHttp } from "../../../../hooks/http.hook";

const WorkSpaceNewWork = (props) => {
  const { loading, error, request } = useHttp();
  useEffect(() => {
    const getImages = async () => {
      const images = await request("/api/works/getPhotos/workPhoto", "GET", null);
      props.setImagesData(images);
    };
    getImages();
  }, []);

  return (
    <div>
      <HeaderOFWork
        work={props.work}
        createWorkItem={props.createWorkItem}
        updateWorkItem={props.updateWorkItem}
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
      <FilePondWorks loading={loading} allWorks={props.allWorks} />
      <WorkImagesEdit 
        work={props.work}
        images={props.images}
      />
    </div>
  );
};

export default WorkSpaceNewWork;
