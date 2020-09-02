import React from "react";
import { reduxForm, Field } from "redux-form";

const ArticleBlocksForm = (props) => {
  return (
    <form>
      <Field placeholder="Section Title" name="name" component="input" />
      
    </form>
  );
};

const UpdateArticleData = reduxForm({ form: "updateArticleData" })(ArticleBlocksForm);

export default UpdateArticleData;
