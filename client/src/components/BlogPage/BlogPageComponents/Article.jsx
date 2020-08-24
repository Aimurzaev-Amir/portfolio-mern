import React from "react";
import ShareArticle from "./ShareArticle";
import "../BlogPage.css";
import ArticleBlock from "./ArticleBlock";

let Article = (props) => {
  let ArticleData = props.article.map((article) => {
    if (props.ArticleName) {
      if (props.ArticleName === article.urlAdress) {
        let ArticleBlocks = article.fullVersion.map((block) => {
          return (
            <ArticleBlock
              key={block.id}
              sectionTitle={block.sectionTitle}
              sectionImg={block.sectionImg}
              // sectionImgDescr={block.sectionImgDescr}
              sectionText={block.sectionText}
              sectionList={block.sectionList}
            />
          );
        });
        return (
          <div className="bgBlue blogPaperOverlay">
            <div className="articleReadMore blogPaper wrapper">
              <div className="blogOverlay">
                <div className="blogArticle">
                  <h1>{article.articleName}</h1>
                  <hr />
                  <div className="dateViews">
                    <p className="date">By Amir Aimurzayev on {article.articleDate}</p>
                  </div>
                  <img src={article.articlePreview} alt={article.previewDescription} />
                  {ArticleBlocks}
                </div>
                <ShareArticle />
              </div>
            </div>
          </div>
        );
      }
    }
  });

  // let ArticleBlocks = props.article.fullVersion.map((block) => {
  //   return (
  //     <ArticleBlock
  //       key={block.id}
  //       sectionTitle={block.sectionTitle}
  //       sectionImg={block.sectionImg}
  //       // sectionImgDescr={block.sectionImgDescr}
  //       sectionText={block.sectionText}
  //       sectionList={block.sectionList}
  //     />
  //   );
  // });
  return (
    // <div className="bgBlue blogPaperOverlay">
    //   <div className="articleReadMore blogPaper wrapper">
    //     <div className="blogOverlay">
    //       <div className="blogArticle">
    //         <h1>{props.article.articleName}</h1>
    //         <hr />
    //         <div className="dateViews">
    //           <p className="date">By Amir Aimurzayev on {props.article.articleDate}</p>
    //         </div>
    //         <img src={props.article.articlePreview} alt={props.article.previewDescription} />
    //         {ArticleBlocks}
    //       </div>
    //       <ShareArticle />
    //     </div>
    //   </div>
    // </div>
    <div>{ArticleData}</div>
  );
};

export default Article;
