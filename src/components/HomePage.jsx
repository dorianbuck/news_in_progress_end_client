import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Article } from "../modules/apiHelper";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";
import DisplayedArticle from "./DisplayedArticle";

const HomePage = () => {
  const { articles } = useSelector((state) => state);
  const { displayedArticle } = useSelector((state) => state)
  // const [displayedArticle, setDisplayedArticle] = useState();

  useEffect(() => {
    Article.index();
    Article.show(1)
  }, []);

  let articleList = articles.map((articleItem, id) => {
    return <ArticleItem articleItem={articleItem} id={id} key={id} />;
  });


  return (
    <>
      {displayedArticle ? (
        <DisplayedArticle displayedArticle={displayedArticle} />
          ) : (
        <Grid column="equal" centered stackable>
          <Grid.Row>{articleList}</Grid.Row>
        </Grid>
      )}
    </>
  );
};

export default HomePage;
