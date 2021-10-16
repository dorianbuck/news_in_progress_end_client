import React from "react";
import { Container } from "semantic-ui-react";

const DisplayedArticle = ({displayedArticle}) => {
  return (
    <Container data-cy="displayed-article">
      <h3 data-cy="article-title">{displayedArticle.title}</h3>
      <div data-cy="article-authors">{displayedArticle.authors}</div>
      <div data-cy="article-date">Published on:{displayedArticle.created_at}</div>
      <div data-cy="article-body">Published on:{displayedArticle.body}</div>
    </Container>
  );
};

export default DisplayedArticle;
