import React from "react";
import { useState } from "react";
import "../BlogPage.css";
import user from "../img/user.png";
import UpdateArticleAnswerForm from "./Forms/CreateArticleAnswerForm";
import UpdateArticleCommentForm from "./Forms/CreateArticleCommentForm";

const ArticleComments = (props) => {
  const ShowComments = props.articleComments
    .filter((comment) => comment.commentOwner === undefined)
    .map((comment) => {
      const ShowCommentsAnswers = props.articleComments
        .filter((answer) => answer.commentOwner === comment._id)
        .map((answer) => {
          return (
            <div key={answer._id} className="commentItem commentItemsAnswer">
              <img src={user} alt="user aimurzayev comment answer" />
              <div className="commentInfo">
                <div className="commentNameDate">
                  <p>{answer.userName}</p>
                  <p>{answer.CommentDate}</p>
                </div>
                <div className="commentInfoExtended">
                  <p className="commentText">{answer.CommentText}</p>
                  <p id={answer._id} onClick={props.addAnswer}>
                    answer
                  </p>
                  {props.currentCommentId === answer._id && (
                    <UpdateArticleAnswerForm onSubmit={props.addArticleCommentAnswer} />
                  )}
                </div>
              </div>
            </div>
          );
        });

      return (
        <div key={comment._id} className="showCommentsArea">
          <div className="commentItem">
            <img src={user} alt="user aimurzayev comment answer" />
            <div className="commentInfo">
              <div className="commentNameDate">
                <p>{comment.userName}</p>
                <p>{comment.CommentDate}</p>
              </div>
              <div className="commentInfoExtended">
                <p className="commentText">{comment.CommentText}</p>
                <p id={comment._id} onClick={props.addAnswer}>
                  answer
                </p>
                {props.currentCommentId === comment._id && (
                  <UpdateArticleAnswerForm onSubmit={props.addArticleCommentAnswer} />
                )}
              </div>
            </div>
          </div>
          {ShowCommentsAnswers}
        </div>
      );
    });

  return (
    <div className=" commentsArea">
      <UpdateArticleCommentForm onSubmit={props.addArticleComment} />
      {ShowComments}
    </div>
  );
};

export default ArticleComments;
