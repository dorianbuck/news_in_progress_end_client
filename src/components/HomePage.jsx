import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Article } from "../modules/apiHelper";
import ArticleItem from "./ArticleItem";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const articlesResponse = await Article.index();
      setArticles(articlesResponse);
    })();
  }, []);

  let articleList = articles.map((articleItem, id) => {
    return <ArticleItem articleItem={articleItem} id={id} key={id} />;
  });

  return (
    <Grid column="equal" centered stackable>
      <Grid.Row>{articleList}</Grid.Row>
    </Grid>
  );
};

export default HomePage;
