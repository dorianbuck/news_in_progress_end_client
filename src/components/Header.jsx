import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, Dropdown } from "semantic-ui-react";

const Header = () => {
  const { categories } = useSelector((state) => state);

  let categoriesList = categories.map((category, index) => {
    let categoryToLowerCase = category.toLowerCase();
    return (
      <Dropdown.Item
        data-cy={`${categoryToLowerCase}-category`}
        as={Link}
        to={{ pathname: `/category/${categoryToLowerCase}` }}
        key={index}
      >
        {category}
      </Dropdown.Item>
    );
  });

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
        <Dropdown.Menu>{categoriesList}</Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default Header;
