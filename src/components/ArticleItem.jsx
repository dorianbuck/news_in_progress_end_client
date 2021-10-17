import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ArticleItem = ({ articleItem, id }) => {
  const dispatch = useDispatch();
  return (
    <Grid.Column width="4" data-cy="news-section">
      <Segment
        data-cy={`article-${id}`}
        as={Link}
        to={{ pathname: `/article-${id}` }}
        onClick={() =>
          dispatch({
            type: "SET_ARTICLE_ID",
            payload: id,
          })
        }
        basic
      >
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
