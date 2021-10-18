import React, { useEffect } from "react";
import { Grid, Menu, Dropdown } from "semantic-ui-react";
import { Article } from "../modules/apiHelper";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";

const Category = () => {

  useEffect(() => {
    // Article.index('')
  }, [])

  return (
    <div>
      hello
      {/* <Grid column="equal" centered stackable>
        <Grid.Row>{articleList}</Grid.Row>
      </Grid> */}
    </div>
  );
};

export default Category;
