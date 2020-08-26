import React, { useEffect } from "react";
import { Field, reduxForm } from "redux-form";

const HeaderUpdateWorkImgForm = (props) => {
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

  return (
    <form className="wrapper workIntroEdit" onSubmit={props.handleSubmit}>
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
        <Field placeholder="Preview Description" name="previewDescription" component="input" />
      </div>
      <div className="buttonPage whiteBtn workIntroEditColumn">
        <button>update</button>
      </div>
    </form>
  );
};

const UpdateWorkImages = reduxForm({ form: "updateImages" })(HeaderUpdateWorkImgForm);

export default UpdateWorkImages;
