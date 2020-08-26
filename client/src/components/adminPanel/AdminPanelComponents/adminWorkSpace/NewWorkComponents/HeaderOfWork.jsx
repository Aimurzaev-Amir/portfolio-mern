import React, { useEffect } from "react";
// import { Field } from "redux-form";
import mainBackground from "../../../img/mainBackgroundExample.jpg";
import CreateNewWorkItem from "./Forms/HeaderCreateWorkForm";
import UpdateWorkImages from "./Forms/HeaderUpdateWorkImgForm";

const HeaderOFWork = (props) => {
  if (!props.work.workBackground) {
    props.work.workBackground = mainBackground;
  }

  return (
    <header
      className="workHeader"
      style={{ backgroundImage: "url(" + props.work.workBackground + ")" }}
    >
      <div className="workIntro">
        <UpdateWorkImages
          onSubmit={props.updateWorkItem}
          work={props.work}
          changePreview={props.changePreview}
          changePhoto={props.changePhoto}
          changeBackground={props.changeBackground}
        />
        <CreateNewWorkItem onSubmit={props.createWorkItem} />
      </div>
    </header>
  );
};

export default HeaderOFWork;
