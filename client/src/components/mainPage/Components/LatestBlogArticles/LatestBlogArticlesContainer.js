import React from "react";
import LatestBlogArticles from "./LatestBlogArticles";
import { connect } from "react-redux";

let LatestBlogArticlesContainer = (props) => {
  return <LatestBlogArticles articles={props.articles} params={props.params} />;
};

let mapStateToProps = (state) => {
  return {
    articles: state.articles.Articles,
  };
};

export default connect(mapStateToProps, { })(LatestBlogArticlesContainer);
