import React from "react";
import AdminPanelMenu from "./AdminPanelMenu";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../Hoc/withRedirect";
import { logout } from "../../../Redux/AdminReducer"

const AdminPanelManuContaienr = (props) => {
  return <AdminPanelMenu works={props.works} articles={props.articles} logout={props.logout} />; 
};

let mapStateToProps = (state) => {
  return {
    works: state.works.Works,
    articles: state.articles.Articles,
  };
};

export default compose(connect(mapStateToProps, {logout}), withAuthRedirect)(AdminPanelManuContaienr);
