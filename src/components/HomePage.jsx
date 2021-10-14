import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { articlesIndex } from "../modules/apiHelper";
import ArticleItem from "./ArticleItem";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const articlesResponse = await articlesIndex();
      setArticles(articlesResponse);
    })();
  }, []);

  let articleList = articles.map((articleItem, index) => {
    return (
      <ArticleItem
        articleItem={articleItem}
        index={index}
        key={articleItem.id}
      />
    );
  });

  return (
    <Grid column="equal" centered stackable>
      <Grid.Row>
      {articleList}

      </Grid.Row>
    </Grid>
  );
};

export default HomePage;
