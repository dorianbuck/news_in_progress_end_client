import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { articles } from "../modules/apiHelper";
import ArticleItem from "./ArticleItem";

const HomePage = () => {
  const [articleItems, setArticleItems] = useState([]);

  useEffect(() => {
    articles.index();
    // setArticleItems(response.data.articles);
  }, []);

  let articleList = articleItems.map((articleItem, index) => {
    return <ArticleItem articleItem={articleItem} index={index} key={index} />;
  });
  return (
    // <div>{articleList}</div>

    <Grid >
      <Grid.Row>
        <Grid.Column column="equal" data-cy="news-section">{articleList}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HomePage;
