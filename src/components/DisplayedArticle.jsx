import React from "react";
import { Container } from "semantic-ui-react";

const DisplayedArticle = ({ displayedArticle }) => {
  return (
    <Container text data-cy="displayed-article">
      <h3 data-cy="article-title">{displayedArticle.title}</h3>
      <p data-cy="article-authors">
        By: {displayedArticle.authors}
      </p>
      <br />
      <p data-cy="article-date">
        Published on: {displayedArticle.created_at}
      </p>
      <div className="body" data-cy="article-body">{displayedArticle.body}</div>
    </Container>
  );
};

export default DisplayedArticle;
