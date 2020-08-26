import React, { useState } from "react";
import { Field } from "redux-form";
import UpdateWorkStyles from "./Forms/OverviewStylesForm";
import UpdateWorkTitle from "./Forms/OverviewUpdateWorkTitleForm";
import UpdateWorkFontName from "./Forms/OverviewUpdateFontNameForm";

const WorkOverviewEdit = (props) => {
  let workColors = props.work.additional.colors.map((color) => {
    return <div key={color.id} className="colorEllipse" style={{ background: color.color }}></div>;
  });

  let workStyle = props.work.additional.textStyles.map((style) => {
    return (
      <p
        key={style.id}
        className="workStyle"
        style={{ fontSize: style.size + "px", fontWeight: style.weight }}
      >
        {style.name}
      </p>
    );
  });

  return (
    <div className="workOverview">
      <UpdateWorkTitle onSubmit={props.updateWorkItem} />
      <div className="designInfo">
        <UpdateWorkFontName onSubmit={props.updateWorkItem} />
        <div className="workStyles">
          <h2>Text styles</h2>
          {workStyle}
          <UpdateWorkStyles onSubmit={props.createWorkStyle} />
        </div>
        <div className="workColors">
          <h2>Colors</h2>
          <div className="colorEllipses">{workColors}</div>
          <div className="editInput editEllipseColor">
            <input onChange={props.onColorChange} name="newColorData" type="color" />
            <button onClick={props.createWorkColor}>add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOverviewEdit;
