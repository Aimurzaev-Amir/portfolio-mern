import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AdminArticlesSpace from "./AdminArticlesSpace";
import { useHttp } from "../../../../hooks/http.hook";

const AdminArticlesSpaceContainer = (props) => {
  const [created, setCreated] = useState(false);
  const { loading, error, request } = useHttp();
  const createArticle = async (formData) => {
    try {
      const createArticleData = await request("/api/articles/create", "POST", {
        ...formData,
      });
      setCreated(true);
    } catch (e) {}
  };
  return (
    <div>
      {created ? (
        <Redirect to={"/admin/update-latest-article"} />
      ) : (
        <AdminArticlesSpace createArticle={createArticle} />
      )}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(AdminArticlesSpaceContainer);
