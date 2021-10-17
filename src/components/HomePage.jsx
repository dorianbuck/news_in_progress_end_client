import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Article } from "../modules/apiHelper";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";
import DisplayedArticle from "./DisplayedArticle";

const HomePage = () => {
  const { articles } = useSelector((state) => state);
  const { article } = useSelector((state) => state);

  useEffect(() => {
    Article.index();
    // Article.show(1);
  }, []);
  // debugger;

  let articleList = articles.map((articleItem, id) => {
    return <ArticleItem articleItem={articleItem} id={id} key={id} />;
  });

  return (
    <div data-cy="overall-page">
      {article ? (
        <DisplayedArticle displayedArticle={article} />
      ) : (
        <Grid column="equal" centered stackable>
          <Grid.Row>{articleList}</Grid.Row>
        </Grid>
      )}
    </div>
  );
};

export default HomePage;
