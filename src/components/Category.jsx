import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Article } from "../modules/apiHelper";
import { useParams } from "react-router";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";
import _ from "lodash";

const Category = () => {
  const { category } = useParams();
  const { articles } = useSelector((state) => state);


  useEffect(() => {
    Article.index(category);
    debugger
  }, [category]);

  let articleList = articles.map((articleItem) => {
    return <ArticleItem articleItem={articleItem}  key={articleItem.id} />;
  });

  return (
    <>
      <h1 data-cy="category-title">{_.startCase(category)}</h1>
      <Grid column="equal" centered stackable>
        <Grid.Row>{articleList}</Grid.Row>
      </Grid>
    </>
  );
};

export default Category;
