import React from "react";
import "./BlogPage.css";
import BlogPageElement from "./BlogPageComponents/BlogPageElement";

let BlogPage = (props) => {
  let BlogPageElements = props.articles.map((article) => {
    return (
      <BlogPageElement
        key={article.id}
        id={article.id}
        name={article.articleName}
        date={article.articleDate}
        description={article.articleSmallDescription}
        img={article.articlePreview}
        imgDescr={article.previewDescription}
        url={article.urlAdress}
        comments={article.comments}
        likes={article.likes}
        setArticleId={props.setArticleId}
      />
    );
  });
  return (
    <div className="bgBlue">
      <div className="blogPaperOverlay">
        <div className="blogPaper wrapper">
          <div className="blogOverlay">{BlogPageElements}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
