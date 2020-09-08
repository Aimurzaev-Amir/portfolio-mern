import React, { useEffect } from "react";
import AdminPanelMenu from "./AdminPanelMenu";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../Hoc/withRedirect";
import { logout } from "../../../Redux/AdminReducer";
import { useHttp } from "../../../hooks/http.hook";
import { setWork, setImagesData } from "../../../Redux/WorksReducer";
import "../Admin.css";
const AdminPanelManuContaienr = (props) => {
  const { loading, error, request } = useHttp();
  useEffect(() => {
    const getLastWorkData = async () => {
      const worksData = await request("/api/works", "GET", null);
      props.setWork(worksData);
      if (worksData.length != 0) {
        const images = await request("/api/works/getMainPhotos/workPhoto", "GET", null);
        props.setImagesData(images);
      }
    };
    getLastWorkData();
  }, []);

  return (
    <AdminPanelMenu
      loading={loading}
      works={props.works}
      images={props.images}
      articles={props.articles}
      logout={props.logout}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    works: state.works.works,
    images: state.works.images,
    articles: state.articles.Articles,
  };
};

export default compose(
  connect(mapStateToProps, { logout, setWork, setImagesData }),
  withAuthRedirect
)(AdminPanelManuContaienr);
