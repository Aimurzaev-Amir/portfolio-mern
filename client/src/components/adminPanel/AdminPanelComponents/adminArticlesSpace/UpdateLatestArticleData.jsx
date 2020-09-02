import React from "react";
import ArticleFilePondForm from "./Forms/ArticleFilePondForm";
import UpdateArticleData from "./Forms/ArticleBlocksForm";

const UpdateLatestArticleData = (props) => {
  return (
    <div className="UpdateLatestArticleData">
      <ArticleFilePondForm articles={props.articles} />
      <UpdateArticleData />
    </div>
  );
};

export default UpdateLatestArticleData;
