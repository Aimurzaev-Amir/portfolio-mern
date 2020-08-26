import React from "react";
import { reduxForm, Field } from "redux-form";

const OverviewStylesForm = (props) => {
  let fontSizesArray = [];
  for (let i = 0; i < 40; i++) {
    fontSizesArray.push(i);
  }
  let fontSizeOption = fontSizesArray.map((size) => {
    return <option key={size}>{size}</option>;
  });
  return (
    <form onSubmit={props.handleSubmit} className="editInput editTextStyles">
      <Field placeholder="Write style" name="name" component="input" />
      <Field name="weight" component="select">
        <option></option>
        <option>Light</option>
        <option>Regular</option>
        <option>Bold</option>
      </Field>
      <Field name="size" component="select">
        {fontSizeOption}
      </Field>
      <button>add</button>
    </form>
  );
};

const UpdateWorkStyles = reduxForm({ form: "updateStyles" })(OverviewStylesForm);

export default UpdateWorkStyles;
