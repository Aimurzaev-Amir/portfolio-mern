import React, { useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import MainImagesUploadForm from "./MainImagesUploadForm";

const HeaderUpdateWorkImgForm = (props) => {
  // useEffect(() => {
  //   props.changePhoto(props.work.workPhoto);
  // }, [props.work.workPhoto]);

  return (
    <div className="wrapper workIntroEdit">
      <MainImagesUploadForm
        onChangePhoto={props.onChangePhoto}
        onChangeBackground={props.onChangeBackground}
        onChangePreview={props.onChangePreview}
        updateWorkPhoto={props.updateWorkPhoto}
      />
      <form onSubmit={props.handleSubmit}>
        <div className="workIntroEditColumn">
          <Field placeholder="Photo Description" name="photoDescription" component="input" />
          <Field placeholder="Preview Description" name="previewDescription" component="input" />
        </div>
        <div className="buttonPage whiteBtn workIntroEditColumn">
          <button>update</button>
        </div>
      </form>
    </div>
  );
};

const UpdateWorkImages = reduxForm({ form: "updateImages" })(HeaderUpdateWorkImgForm);

export default UpdateWorkImages;
