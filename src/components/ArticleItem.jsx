import React from "react";
import { Segment } from "semantic-ui-react";

const ArticleItem = ({ articles, index }) => {
  return (
    <Segment data-cy={`article-${index}`}>
      <h3 data-cy="title" header={articles.title}></h3>
      <div data-cy="lede">lede={articles.lede}</div>
      <div data-cy="authors">authors={articles.authors}</div>
      <div data-cy="created_at">created_at={articles.created_at}</div>
      <div data-cy="updated_at">updated_at={articles.updated_at}</div>
    </Segment>
  );
};

export default ArticleItem;
