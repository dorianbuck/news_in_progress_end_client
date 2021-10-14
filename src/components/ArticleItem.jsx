import React from "react";
import apiHelper from "../modules/apiHelper";
import { Grid, Segment } from "semantic-ui-react";

const News = ({ article }) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Segment
          data-cy="article"
          header={article.title}
          lede={article.lede}
          authors={article.authors}
          created_at={article.created_at}
          updated_at={article.updated_at}
        ></Segment>
      </Grid.Column>
    </Grid.Row>
  );
};

export default News;
