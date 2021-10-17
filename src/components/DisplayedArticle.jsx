import React from "react";
import { Container } from "semantic-ui-react";
import _ from "lodash";

const DisplayedArticle = ({ displayedArticle }) => {
  return (
    <Container text data-cy="displayed-article">
      <h3 data-cy="article-title">{displayedArticle.title}</h3>
      <authors data-cy="article-authors">
        By {_.startCase(displayedArticle.authors)}
      </authors>
      <br />
      <date data-cy="article-date">
        Published on: {displayedArticle.created_at}
      </date>
      <body data-cy="article-body">{displayedArticle.body}</body>
    </Container>
  );
};

export default DisplayedArticle;
