import React, { useState } from "react";
import { Field } from "redux-form";
import { useEffect } from "react";

const WorkOverviewEdit = (props) => {
  let [color, setColor] = useState(null);

  const onColorChange = (e) => {
    setColor(e.currentTarget.value);
  };
  const setChangedColor = () => {
    props.setColor(color);
    // console.log(color)
  };
  
  let workColors = props.work.additional.colors.map((color) => {
    return <div key={color.id} className="colorEllipse" style={{ background: color.color }}></div>;
  });

  let fontSizesArray = [];
  for (let i = 0; i < 40; i++) {
    fontSizesArray.push(i);
  }
  let fontSizeOption = fontSizesArray.map((size) => {
    return <option key={size}>{size}</option>;
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
      <div className="workTitle">
        <h2>ABOUT PROJECT</h2>
        <div className="editTitlesInput">
          <Field placeholder="About project" name="aboutProject" component="textarea" />
        </div>
      </div>
      <div className="designInfo">
        <div className="workTypography">
          <h2>Typography</h2>
          <div className="editInput">
            <Field placeholder="Font Name" name="fontName" component="input" />
          </div>
          <p>ABCDEFGIJKLMNOPQRSTUVWXYZ</p>
          <p>abcdefgijklmnopqrstuvwxyz</p>
        </div>
        <div className="workStyles">
          <h2>Text styles</h2>
          {workStyle}
          <div className="editInput editTextStyles">
            <Field placeholder="Write style" name="style" component="input" />
            <Field name="fontWeight" component="select">
              <option></option>
              <option>Light</option>
              <option>Regular</option>
              <option>Bold</option>
            </Field>
            <Field name="size" component="select">
              {fontSizeOption}
            </Field>
            <button>add</button>
          </div>
        </div>
        <div className="workColors">
          <h2>Colors</h2>
          <div className="colorEllipses">{workColors}</div>
          <div className="editInput editEllipseColor">
            <input onChange={onColorChange} name="newColorData" type="color" />
            <button onClick={setChangedColor}>add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOverviewEdit;
