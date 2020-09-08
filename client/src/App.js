import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import RoutingContainer from "./RoutingContainer";
import ScrollToTop from "./ScrollToTop";

const PortfolioApp = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <RoutingContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default PortfolioApp;
