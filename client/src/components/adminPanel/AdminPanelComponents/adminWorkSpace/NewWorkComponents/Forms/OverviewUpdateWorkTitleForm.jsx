import React from "react";
import { reduxForm, Field } from "redux-form";

const OverviewUpdateWorkTitleForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="workTitle">
      <h2>ABOUT PROJECT</h2>
      <div className="editTitlesInput">
        <Field placeholder="About project" name="aboutProject" component="textarea" />
      </div>
      <button>save</button>
    </form>
  );
};

const UpdateWorkTitle = reduxForm({ form: "updateStyles" })(OverviewUpdateWorkTitleForm);

export default UpdateWorkTitle;
