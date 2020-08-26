import React from "react";
import { reduxForm, Field } from "redux-form";

const DetailesTypeOfWorkForm = (props) => {
  return (
    <form className="detailsInfo" onClick={props.handleSubmit}>
      <h3>PROJECT TYPE</h3>
      <div className="editInput">
        <Field placeholder="Type of project" name="smallDescription" component="input" />
        <button>add</button>
      </div>
    </form>
  );
};

const SetTypeOfWork = reduxForm({ form: "updateTypeOfWork" })(DetailesTypeOfWorkForm);

export default SetTypeOfWork;
