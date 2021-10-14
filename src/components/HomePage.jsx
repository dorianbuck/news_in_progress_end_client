import axios from "axios";
import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
// import { articlesIndex } from "../modules/apiHelper";

import ArticleItem from "./ArticleItem";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  // const articlesIndex = async () => {
  //   const response = await axios.get("/api/articles/");
  //   setarticles(response.data.articles);
  // };

  useEffect(() => {
    axios.get("/api/articles/").then((response) => {
      setArticles(response.data.articles);
    });
  }, []);

  let articleList = articles.map((articleItem, index) => {
    return <ArticleItem articleItem={articleItem} index={index} key={articleItem.id} />;
  });

  return (
    // <div>{articleList}</div>

    <Grid>
      <Grid.Row>
        <Grid.Column column="equal" data-cy="news-section">
          {articleList}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HomePage;
