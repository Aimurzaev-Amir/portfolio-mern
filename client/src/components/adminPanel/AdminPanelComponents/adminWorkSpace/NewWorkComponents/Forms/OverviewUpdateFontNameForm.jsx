import React from "react";
import { reduxForm, Field } from "redux-form";

const OverviewUpdateFontNameForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="workTypography">
      <h2>Typography</h2>
      <div className="editInput">
        <Field placeholder="Font Name" name="fontName" component="input" />
        <button>save</button>
      </div>
      <p>ABCDEFGIJKLMNOPQRSTUVWXYZ</p>
      <p>abcdefgijklmnopqrstuvwxyz</p>
    </form>
  );
};

const UpdateWorkFontName = reduxForm({ form: "updateFontName" })(OverviewUpdateFontNameForm);

export default UpdateWorkFontName;
