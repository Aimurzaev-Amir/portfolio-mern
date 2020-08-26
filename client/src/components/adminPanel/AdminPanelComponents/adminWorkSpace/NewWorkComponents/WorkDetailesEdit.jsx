import React from "react";
import SetDidPoint from "./Forms/DetailesWhatIDidForm";
import SetTypeOfWork from "./Forms/DetailesTypeofWorkForm";
import SetTechnologies from "./Forms/DetailesTechnologiesForm";

const WorkDetailsEdit = (props) => {
  return (
    <div className="workDetails">
      <SetTypeOfWork onSubmit={props.updateWorkItem} />
      <SetDidPoint work={props.work} onSubmit={props.createWorkDidPoint} />
      <SetTechnologies onSubmit={props.updateWorkItem} />
    </div>
  );
};

export default WorkDetailsEdit;
