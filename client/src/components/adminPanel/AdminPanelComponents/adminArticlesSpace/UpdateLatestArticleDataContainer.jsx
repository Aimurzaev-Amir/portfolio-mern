import React, { useEffect } from "react";
import UpdateLatestArticleData from "./UpdateLatestArticleData";
import { connect } from "react-redux";
import { useHttp } from "../../../../hooks/http.hook";
import { setArticles, setArticleBlocks } from "../../../../Redux/ArticlesReducer";

const UpdateLatestArticleDataContainer = (props) => {
  const { loading, error, request } = useHttp();
  useEffect(() => {
    const articles = async () => {
      const articlesResponse = await request("/api/articles", "GET", null);
      props.setArticles(articlesResponse);
      const articlesBlocksresponse = await request(
        "/api/articles/getArticleBlockData",
        "GET",
        null
      );
      props.setArticleBlocks(articlesBlocksresponse);
    };
    articles();
  }, []);
  const addArticleBlock = async (formData) => {
    const articlesResponse = await request("/api/articles", "GET", null);
    const lastArticleId = articlesResponse[articlesResponse.length - 1]._id;
    const createArticleBlock = await request("/api/articles/createArticleBlock", "POST", {
      ...formData,
      owner: lastArticleId,
    });
    const getArticleBlocks = await request("/api/articles/getArticleBlockData", "GET", null);
    props.setArticleBlocks(getArticleBlocks);
  };
  return (
    <div>
      <UpdateLatestArticleData
        articles={props.allArticles}
        blocks={props.blocks}
        addArticleBlock={addArticleBlock}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    allArticles: state.articles.articles,
    blocks: state.articles.blocks,
  };
};

export default connect(mapStateToProps, { setArticles, setArticleBlocks })(
  UpdateLatestArticleDataContainer
);
