import React from "react";
import { Segment } from "semantic-ui-react";

const ArticleItem = ({ articleItem, index }) => {
  return (
    <Segment data-cy={`article-${index}`}>
      <h3 data-cy="title"> header={articleItem.title}</h3>
      <div data-cy="lede">lede={articleItem.lede}</div>
      <div data-cy="authors">authors={articleItem.authors}</div>
      <div data-cy="created_at">created_at={articleItem.created_at}</div>
      <div data-cy="updated_at">updated_at={articleItem.updated_at}</div>
    </Segment>
  );
};

export default ArticleItem;
