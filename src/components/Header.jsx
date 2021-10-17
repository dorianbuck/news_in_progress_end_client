import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Article } from "../modules/apiHelper";

const Header = () => {
  return (
    <Menu inverted data-cy="header">
      <Menu.Item
        id="home"
        name="home"
        as={Link}
        to={{ pathname: "/" }}
        data-cy="home"
        onClick={Article.index}
      >
        Home
      </Menu.Item>
    </Menu>
  );
};

export default Header;
