import React from "react";
import { useState } from "react";

const MainImagesUploadForm = (props) => {
  return (
    <div>
      <form
        action="/api/works/uploadPhoto"
        method="POST"
        encType="multipart/form-data"
        className="workIntroEditColumn"
      >
        <label htmlFor="workPhoto"> Click to choose project main img </label>
        <input type="file" name="workPhoto" onChange={props.onChangePhoto} />
        <input type="submit" value="Upload Photo" />
      </form>
      <p onClick={props.updateWorkPhoto}>save</p>
      <label htmlFor="workPreview"> Click to choose project preview (card) </label>
      <input type="file" name="workPreview" id="workPreview" onChange={props.onChangePreview} />
      <label htmlFor="workBackground"> Click to choose project backgroud </label>
      <input
        type="file"
        name="workBackground"
        id="workBackground"
        onChange={props.onChangeBackground}
      />
    </div>
  );
};

export default MainImagesUploadForm;
