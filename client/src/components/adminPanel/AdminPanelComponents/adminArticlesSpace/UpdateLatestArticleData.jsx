import React from "react";
import ArticleFilePondForm from "./Forms/ArticleFilePondForm";
import UpdateArticleData from "./Forms/ArticleBlocksForm";
import ArticleBlockImageForm from "./Forms/ArticleBlockImageForm";
import ShowArticleDevelopingResults from "./ShowArticleDevelopingResults";

const UpdateLatestArticleData = (props) => {
  return (
    <div className="UpdateLatestArticleData">
      <ArticleFilePondForm articles={props.articles} />
      <ShowArticleDevelopingResults articles={props.articles} blocks={props.blocks} />
      <UpdateArticleData onSubmit={props.addArticleBlock} />
      <ArticleBlockImageForm articles={props.articles} blocks={props.blocks} />
    </div>
  );
};

export default UpdateLatestArticleData;
