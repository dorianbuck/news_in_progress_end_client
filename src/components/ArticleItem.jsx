import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import { Article } from "../modules/apiHelper";

const ArticleItem = ({ articleItem, id }) => {
  return (
    <Grid.Column width="4" data-cy="news-section">
      <Segment data-cy={`article-${id}`} onClick={() => Article.show(id)}> 
        <h3 data-cy="title"> {articleItem.title}</h3>
        <div data-cy="lede">{articleItem.lede}</div>
        <div data-cy="authors">{articleItem.authors}</div>
        <div data-cy="created_at">{articleItem.created_at}</div>
        <div data-cy="updated_at">{articleItem.updated_at}</div>
      </Segment>
    </Grid.Column>
  );
};

export default ArticleItem;

