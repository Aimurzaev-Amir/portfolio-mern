import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import RoutingContainer from "./RoutingContainer";
// import SuspenseHOC from "./Suspense/Suspense";
// import Navbar from "./components/Header/Navbar";
// import Footer from "./components/footer/Footer";
// import KazTransGas from "./components/PortfolioPage/PortfolioPageWorks/KazTransGas";

// const BlogPageContainer = React.lazy(() => import("./components/BlogPage/BlogPageContainer"));
// const PortfolioPageContainer = React.lazy(() => import("./components/PortfolioPage/PortfolioPageContainer"));
// const MainPage = React.lazy(() => import("./components/mainPage/MainPage"));
// const AboutMePage = React.lazy(() => import("./components/aboutMePage/AboutMePage"));
// const FeedbackForm = React.lazy(() =>
//   import("./components/mainPage/Components/FeedbackForm/FeedbackForm")
// );

// function App(props) {
//   return (
//     <div>
//       <Navbar />
//       <Route exact path="/" render={SuspenseHOC(MainPage)} />
//       <Route exact path="/about-me" render={SuspenseHOC(AboutMePage)} />
//       <Route exact path="/contacts" render={SuspenseHOC(FeedbackForm)} />
//       <Route exact path="/portfolio" render={SuspenseHOC(PortfolioPageContainer)} />
//       <Route exact path={props.works[props.currentWorkId].urlAdress} component={() => (
//           <KazTransGas works={props.works[props.currentWorkId]} currentWorkId={props.currentWorkId} />
//         )}
//       />
//       <Route exact path="/blog" render={SuspenseHOC(BlogPageContainer)} />
//       <Footer />
//     </div>
//   );
// }

const PortfolioApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RoutingContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default PortfolioApp;
