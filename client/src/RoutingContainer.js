import React /*{ useEffect }*/ from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SuspenseHOC from "./Suspense/Suspense";
import { connect } from "react-redux";
import { login } from "./Redux/AdminReducer";
// import BlogPageContainer from "./components/BlogPage/BlogPageContainer";
import ArticleContainer from "./components/BlogPage/BlogPageComponents/ArticleContainer";
import PortfolioPageContainer from "./components/PortfolioPage/PortfolioPageContainer";
import WorkContainer from "./components/PortfolioPage/PortfolioPageWorks/WorkContainer";
import Footer from "./components/footer/Footer";
import NavbarContainer from "./components/Header/NavbarContainer";
// import AdminPanel from "./components/adminPanel/AdminPanel";
// const PortfolioPageContainer = React.lazy(() => import("./components/PortfolioPage/PortfolioPageContainer"));
const BlogPageContainer = React.lazy(() => import("./components/BlogPage/BlogPageContainer"));
const MainPage = React.lazy(() => import("./components/mainPage/MainPage"));
const AboutMePage = React.lazy(() => import("./components/aboutMePage/AboutMePage"));
const FeedbackContainer = React.lazy(() =>
  import("./components/mainPage/Components/FeedbackForm/FeedbackContainer")
);
const AdminPanelContainer = React.lazy(() =>
  import("./components/adminPanel/AdminPanelComponents/AdminPanelContainer")
);
const AdminPanelMenuContainer = React.lazy(() =>
  import("./components/adminPanel/AdminPanelComponents/AdminPanelMenuContainer")
);
const WorkSpaceNewWorkContainer = React.lazy(() =>
  import("./components/adminPanel/AdminPanelComponents/adminWorkSpace/WorkSpaceNewWorkContainer")
);
const WorkSpaceNewArticle = React.lazy(() =>
  import("./components/adminPanel/AdminPanelComponents/adminWorkSpace/WorkSpaceNewArticle")
);

function App(props) {
  // const storageName = "userData";
  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem(storageName));
  //   if (data && data.token) {
  //     props.login(data.token, data.userId);
  //   }
  // }, [props.login]);
  return (
    <div>
      <NavbarContainer />
      <Route exact path="/" render={SuspenseHOC(MainPage)} />
      <Route exact path="/about-me" render={SuspenseHOC(AboutMePage)} />
      <Route exact path="/contacts" render={SuspenseHOC(FeedbackContainer)} />
      {/* <Route exact path="/portfolio" render={SuspenseHOC(PortfolioPageContainer)} /> */}
      <Route exact path="/portfolio" component={() => <PortfolioPageContainer />} />
      <Route path="/portfolio/:workName?" component={() => <WorkContainer />} />

      <Route exact path="/blog" render={SuspenseHOC(BlogPageContainer)} />
      <Route path="/blog/:articleName?" component={() => <ArticleContainer />} />

      {/* Admin Panel Routers */}
      <Route exact path="/authorization" render={SuspenseHOC(AdminPanelContainer)} />
      <Route exact path="/admin" render={SuspenseHOC(AdminPanelMenuContainer)} />
      <Route exact path="/admin/create-new-work" render={SuspenseHOC(WorkSpaceNewWorkContainer)} />
      <Route exact path="/admin/create-new-article" render={SuspenseHOC(WorkSpaceNewArticle)} />

      <Footer />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    works: state.works.Works,
    currentWorkId: state.works.currentWorkId,
    articles: state.articles.Articles,
    currentArticleId: state.articles.currentArticleId,
  };
};

export default connect(mapStateToProps, { login })(App);
