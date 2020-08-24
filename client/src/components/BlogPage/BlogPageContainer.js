import React from "react";
import BlogPage from "./BlogPage";
import { setArticleId } from "../../Redux/ArticlesReducer"
import { connect } from "react-redux";

let BlogPageContainer = (props) => {
    return(
        <BlogPage articles={props.articles} setArticleId={props.setArticleId}/> 
    ) 
}

let mapStateToProps = (state) => {
    return{
        articles: state.articles.Articles,
    }
}

export default connect(mapStateToProps, { setArticleId })(BlogPageContainer);