import React, { useEffect } from "react";
import UpdateLatestArticleData from "./UpdateLatestArticleData";
import { connect } from "react-redux";
import { useHttp } from "../../../../hooks/http.hook";
import {
  setArticleId,
  setArticles,
  setArticlesMainImages,
  setArticleBlocks,
  setArticleBlocksImages,
  setArticleBlocksLists,
  setArticleBlocksTextAreas,
} from "../../../../Redux/ArticlesReducer";

const UpdateLatestArticleDataContainer = (props) => {
  const { loading, error, request } = useHttp();
  useEffect(() => {
    const articles = async () => {
      const articlesResponse = await request("/api/articles", "GET", null);
      props.setArticles(articlesResponse);
      if (articlesResponse.length != 0) {
        const currentId = articlesResponse[articlesResponse.length - 1]._id;
        props.setArticleId(currentId);
      }
      if (props.currentArticleId != 0) {
        const articlesImages = await request(
          `/api/articles/getArticleMainImages/${props.currentArticleId}`,
          "GET",
          null
        );
        props.setArticlesMainImages(articlesImages);
        const articlesBlocksresponse = await request(
          `/api/articles/getArticleBlockData/${props.currentArticleId}`,
          "GET",
          null
        );
        props.setArticleBlocks(articlesBlocksresponse);
        const articlesBlocksImages = await request(
          `/api/articles/getArticleBlockImages/${props.currentArticleId}`,
          "GET",
          null
        );
        props.setArticleBlocksImages(articlesBlocksImages);

        const articlesBlocksLists = await request(
          `/api/articles/getArticleBlockLists/${props.currentArticleId}`,
          "GET",
          null
        );
        props.setArticleBlocksLists(articlesBlocksLists);
        const articlesBlocksTextAreas = await request(
          `/api/articles/getArticleBlockTextAreas/${props.currentArticleId}`,
          "GET",
          null
        );
        props.setArticleBlocksTextAreas(articlesBlocksTextAreas);
      }
    };
    articles();
  }, [props.currentArticleId]);

  const addArticleBlock = async (formData) => {
    const articlesResponse = await request("/api/articles", "GET", null);
    const lastArticleId = articlesResponse[articlesResponse.length - 1]._id;
    const createArticleBlock = await request("/api/articles/createArticleBlock", "POST", {
      ...formData,
      owner: lastArticleId,
    });
    if (props.currentArticleId === lastArticleId) {
      const getArticleBlocks = await request(
        `/api/articles/getArticleBlockData/${props.currentArticleId}`,
        "GET",
        null
      );
      props.setArticleBlocks(getArticleBlocks);
      formData.title = null;
      formData.text = null;
    }
  };

  const addArticleBlockListItem = async (formData) => {
    const articlesResponse = await request("/api/articles", "GET", null);
    const lastArticleId = articlesResponse[articlesResponse.length - 1]._id;
    const getArticleBlocks = await request(
      `/api/articles/getArticleBlockData/${props.currentArticleId}`,
      "GET",
      null
    );
    const lastArticleBlockId = getArticleBlocks[getArticleBlocks.length - 1]._id;
    const createArticleBlockList = await request("/api/articles/createArticleBlockList", "POST", {
      ...formData,
      articleOwner: lastArticleId,
      blockOwner: lastArticleBlockId,
    });
    if (props.currentArticleId === lastArticleId) {
      const articlesBlocksLists = await request(
        `/api/articles/getArticleBlockLists/${props.currentArticleId}`,
        "GET",
        null
      );
      props.setArticleBlocksLists(articlesBlocksLists);
      const articlesBlocksTextAreas = await request(
        `/api/articles/getArticleBlockTextAreas/${props.currentArticleId}`,
        "GET",
        null
      );
      props.setArticleBlocksTextAreas(articlesBlocksTextAreas);
      formData.title = null;
    }
  };

  const addArticleBlockTextArea = async (formData) => {
    const articlesResponse = await request("/api/articles", "GET", null);
    const lastArticleId = articlesResponse[articlesResponse.length - 1]._id;
    const getArticleBlocks = await request(
      `/api/articles/getArticleBlockData/${props.currentArticleId}`,
      "GET",
      null
    );
    const lastArticleBlockId = getArticleBlocks[getArticleBlocks.length - 1]._id;
    const createArticleBlockTextArea = await request(
      "/api/articles/createArticleBlockTextArea",
      "POST",
      {
        ...formData,
        articleOwner: lastArticleId,
        blockOwner: lastArticleBlockId,
      }
    );
    if (props.currentArticleId === lastArticleId) {
      const articlesBlocksTextAreas = await request(
        `/api/articles/getArticleBlockTextAreas/${props.currentArticleId}`,
        "GET",
        null
      );
      props.setArticleBlocksTextAreas(articlesBlocksTextAreas);
      formData.text = null;
    }
  };
  return (
    <div>
      <UpdateLatestArticleData
        currentArticleId={props.currentArticleId}
        articles={props.allArticles}
        articleImages={props.articleImages}
        blocks={props.blocks}
        blocksImages={props.blocksImages}
        blocksLists={props.blocksLists}
        blocksTextAreas={props.blocksTextAreas}
        addArticleBlock={addArticleBlock}
        addArticleBlockListItem={addArticleBlockListItem}
        addArticleBlockTextArea={addArticleBlockTextArea}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    allArticles: state.articles.articles,
    articleImages: state.articles.images,
    blocks: state.articles.blocks,
    blocksImages: state.articles.blocksImages,
    currentArticleId: state.articles.currentArticleId,
    blocksLists: state.articles.blocksLists,
    blocksTextAreas: state.articles.blocksTextAreas,
  };
};

export default connect(mapStateToProps, {
  setArticleId,
  setArticles,
  setArticlesMainImages,
  setArticleBlocks,
  setArticleBlocksImages,
  setArticleBlocksLists,
  setArticleBlocksTextAreas,
})(UpdateLatestArticleDataContainer);
