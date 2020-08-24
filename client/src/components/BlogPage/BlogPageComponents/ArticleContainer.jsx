import React from "react";
import Article from "./Article";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

let ArticleContainer = (props) => {
  let ArticleName = props.match.params.articleName;

  return (
    <div>
      <Article
        // article={props.articles[props.currentArticleId]}
        article={props.articles}
        // currentArticleId={props.currentArticleId}
        ArticleName={ArticleName}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    articles: state.articles.Articles,
    currentArticleId: state.articles.currentArticleId,
  };
};

export default compose(connect(mapStateToProps, {}), withRouter)(ArticleContainer);
