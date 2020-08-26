import React from "react";
import { reduxForm } from "redux-form";
import "../../Admin.css";
import mainImg from "../../img/mainImgExample.png";
import HeaderOFWork from "./NewWorkComponents/HeaderOfWork";
import WorkOverviewEdit from "./NewWorkComponents/WorkOverviewEdit";
import WorkDetailsEdit from "./NewWorkComponents/WorkDetailesEdit";
import BlockTitleText from "../../../../common/BlockTitle";
import WorkImagesEdit from "./NewWorkComponents/WorkImagesEdit";
import { useEffect } from "react";

const WorkSpaceNewWork = (props) => {
  const onChangeMobileImg = (e) => {
    // props.setMobileImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <div>
      <HeaderOFWork
        work={props.work}
        changePreview={props.changePreview}
        changePhoto={props.changePhoto}
        changeBackground={props.changeBackground}
        createWorkItem={props.createWorkItem}
        updateWorkItem={props.updateWorkItem}
      />
      <div className="workDescriber">
        <div className="workMainLogo">
          <img src={props.work.workPhoto || mainImg} alt={props.work.photoDescription} />
        </div>
        <div>
          <button onClick={props.getWorkData}>click to get</button>
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
      <WorkImagesEdit work={props.work} onChangeMobileImg={onChangeMobileImg} />
    </div>
  );
};

export default WorkSpaceNewWork;
