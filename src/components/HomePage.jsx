import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Article } from "../modules/apiHelper";
import ArticleItem from "./ArticleItem";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

const HomePage = () => {
  const { articles } = useSelector((state) => state);
  const dispatch = useDispatch()
  const uniqueCategories = () => {
    let categories = articles.map(article => {
      return article.category_name
    })
    dispatch({type: 'SET_CATEGORIES', payload: _.uniq(categories)}) 
  };

  useEffect(() => {
    Article.index();
  }, []);

  useEffect(() => {
    uniqueCategories();
  }, [articles]);

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
