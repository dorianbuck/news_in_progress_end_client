import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";


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
        News In Progress
      </Menu.Item>
      <Dropdown item text="Categories" data-cy="category-list">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to={{
              pathname: "/category/business",
            }}
            data-cy="business-category"
          >
            Business
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to={{
              pathname: "/category/tech",
            }}
            data-cy="tech-category"
          >
            Tech
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to={{
              pathname: "/category/science",
            }}
            data-cy="science-category"
          >
            Science
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default Header;
