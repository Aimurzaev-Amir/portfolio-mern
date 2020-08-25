import React from "react";
import { Field } from "redux-form";
import { useState } from "react";

const WorkDetailsEdit = (props) => {
  let [point, setPoint] = useState(null);

  let onPointChange = (e) => {
    setPoint(e.currentTarget.value);
  };

  let setChangedPoint = () => {
    props.setWhatIDid(point);
  };
  
  let whatIDid = props.work.additional.whatIDid.map((point) => {
    return <p key={point.id}> {point.name}</p>;
  });

  return (
    <div className="workDetails">
      <div className="detailsInfo">
        <h3>PROJECT TYPE</h3>
        <div className="editInput">
          <Field placeholder="Type of project" name="smallDescription" component="input" />
        </div>
      </div>
      <div className="detailsInfo">
        <h3>WHAT I DID</h3>
        {whatIDid}
        <div className="editInput">
          <input
            onChange={onPointChange}
            placeholder="What i did"
            name="newPoint"
            component="input"
          />
          <button onClick={setChangedPoint}>add</button>
        </div>
      </div>
      <div className="detailsInfo">
        <h3>TECHNOLOGY USED</h3>
        <div className="editInput">
          <Field placeholder="Used technologies" name="technologyUsed" component="textarea" />
        </div>
      </div>
    </div>
  );
};

export default WorkDetailsEdit;
