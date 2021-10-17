import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Article } from "../modules/apiHelper";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { articles } = useSelector((state) => state);

  useEffect(() => {
    Article.index();
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
