import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { logout } from "../../Redux/AdminReducer";

let NavbarContainer = (props) => {
  return <Navbar validation={props.validation} />;
};

let mapStateToProps = (state) => {
  return {
    validation: state.admin.validation,
  };
};

export default connect(mapStateToProps, { })(NavbarContainer);
