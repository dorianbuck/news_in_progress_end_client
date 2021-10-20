import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Article } from "../modules/apiHelper";
import { Grid, Header } from "semantic-ui-react";
import _ from "lodash";
import ArticleItem from "./ArticleItem";

const Category = () => {
  const { category } = useParams();
  const { articles } = useSelector((state) => state);

  useEffect(() => {
    Article.index(category);
  }, [category]);

  let articleList = articles.map((articleItem) => {
    return <ArticleItem articleItem={articleItem} key={articleItem.id} />;
  });

  return (
    <>
      <Header textAlign="center" size="large" data-cy="category-title">{_.startCase(category)}</Header>
      <Grid padded column="equal" centered stackable>
        <Grid.Row>{articleList}</Grid.Row>
      </Grid>
    </>
  );
};

export default Category;
