import React, { useEffect } from "react";
import UpdateLatestArticleData from "./UpdateLatestArticleData";
import { connect } from "react-redux";
import { useHttp } from "../../../../hooks/http.hook";
import { setArticles } from "../../../../Redux/ArticlesReducer";

const UpdateLatestArticleDataContainer = (props) => {
  const { loading, error, request } = useHttp();
  useEffect(() => {
    const articles = async () => {
      const response = await request(`/api/articles`, "GET", null);
      props.setArticles(response);
    };
    articles();
  }, []);
  return (
    <div>
      <UpdateLatestArticleData articles={props.allArticles} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    allArticles: state.articles.articles,
  };
};

export default connect(mapStateToProps, { setArticles })(UpdateLatestArticleDataContainer);
