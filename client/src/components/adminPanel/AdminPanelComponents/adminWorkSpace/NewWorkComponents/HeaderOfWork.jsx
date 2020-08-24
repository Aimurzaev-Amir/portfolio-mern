import React, { useEffect } from "react";
import { Field } from "redux-form";
import mainBackground from "../../../img/mainBackgroundExample.jpg";

const HeaderOFWork = (props) => {
  useEffect(() => {
    props.changePhoto(props.work.workPhoto);
  }, [props.work.workPhoto]);

  const onChangePhoto = (e) => {
    props.changePhoto(e.target.files[0]);
  };

  const onChangeBackground = (e) => {
    props.changeBackground(e.target.files[0]);
  };
  const onChangePreview = (e) => {
    props.changePreview(e.target.files[0]);
  };

  if (!props.work.workBackground) {
    props.work.workBackground = mainBackground;
  }

  return (
    <header
      className="workHeader"
      style={{ backgroundImage: "url(" + props.work.workBackground + ")" }}
    >
      <div className="workIntro">
        <div className="wrapper workIntroEdit">
          <div className="workIntroEditColumn">
            <label htmlFor="workPhoto"> Click to choose project main img </label>
            <input type="file" name="workPhoto" id="workPhoto" onChange={onChangePhoto} />
            <label htmlFor="workPreview"> Click to choose project preview (card) </label>
            <input type="file" name="workPreview" id="workPreview" onChange={onChangePreview} />
            <label htmlFor="workBackground"> Click to choose project backgroud </label>
            <input
              type="file"
              name="workBackground"
              id="workBackground"
              onChange={onChangeBackground}
            />
          </div>
          <div className="workIntroEditColumn">
            <Field placeholder="Photo Description" name="photoDescription" component="input" />
            <Field placeholder="Background Description" name="style" component="input" />
          </div>
        </div>
        <div className="workIntroTextEdit wrapper">
          <div className="editTitlesInput">
            <Field placeholder="Name of Work" name="workName" component="input" />
            <Field placeholder="Description of work" name="workTitle" component="textarea" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOFWork;
