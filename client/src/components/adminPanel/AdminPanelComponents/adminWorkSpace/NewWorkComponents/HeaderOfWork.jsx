import React from "react";
// import { Field } from "redux-form";
import mainBackground from "../../../img/mainBackgroundExample.jpg";
import CreateNewWorkItem from "./Forms/HeaderCreateWorkForm";

const HeaderOFWork = (props) => {
  if (!props.work.workBackground) {
    props.work.workBackground = mainBackground;
  }

  return (
    <header
      className="workHeader"
      style={{ backgroundImage: "url(" + props.work.workBackground + ")" }}
    >
      <div className="workIntro workIntroEdit">
        {/* <UpdateWorkImages 
          onSubmit={props.updateWorkItem}
          work={props.work}
          onChangePhoto={props.onChangePhoto}
          onChangeBackground={props.onChangeBackground}
          onChangePreview={props.onChangePreview}
        /> */}
        <CreateNewWorkItem onSubmit={props.createWorkItem} />
      </div>
    </header>
  );
};

export default HeaderOFWork;
