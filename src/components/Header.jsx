import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <Menu inverted data-cy="header">
      <Menu.Item
        id="home"
        name="home"
        as={Link}
        to={{ pathname: "/" }}
        data-cy="home"
      >
        Home
      </Menu.Item>
    </Menu>
  );
};

export default Header;
