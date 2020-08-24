import React from "react";
import PanelWorkItem from "./PanelWorkItem";
import PanelArticleItem from "./PanelArticleItem";
 
const WorkSpacePreview = (props) => {
    let Works = props.works.map((work) => {
        return (
          <PanelWorkItem
            key={work.id}
            workPhoto={work.workPhoto}
            workName={work.workName}
            previewDescription={work.previewDescription}
          />
        );
      });
    
      let Articles = props.articles.map((article) => {
        return (
          <PanelArticleItem
            key={article.id}
            articlePhoto={article.articlePreview}
            articleName={article.articleName}
            previewDescription={article.previewDescription}
          />
        );
      });
  return (
    <div>
      <div className="PanelWorksBlock panelBlock">
        <h2>Works</h2>
        <div className="panelItems">{Works}</div>
      </div>
      <div className="panelArticlesBlock panelBlock">
        <h2>Articles</h2>
        <div className="panelItems">{Articles}</div>
      </div>
    </div>
  );
};

export default WorkSpacePreview;
