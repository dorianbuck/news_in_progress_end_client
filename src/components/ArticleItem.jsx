import React from "react";
import { Link } from "react-router-dom";
import { Segment, Grid } from "semantic-ui-react";

const ArticleItem = ({ articleItem }) => {
  return (
    <Grid.Column data-cy="minor-news-section">
      <Segment
        data-cy={`article-${articleItem.id}`}
        as={Link}
        to={{ pathname: `/articles/${articleItem.id}` }}
        basic
      >
        <h3 data-cy="title"> {articleItem.title}</h3>
        <div data-cy="lede">{articleItem.lede}</div>
        <div data-cy="authors">{articleItem.authors.name}</div>
        <div data-cy="created_at">{articleItem.created_at}</div>
        <div data-cy="updated_at">{articleItem.updated_at}</div>
      </Segment>
    </Grid.Column>
  );
};

export default ArticleItem;
