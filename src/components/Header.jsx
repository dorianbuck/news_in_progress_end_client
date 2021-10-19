import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

const Header = () => {
  const { categories } = useSelector((state) => state);

  let categoriesList = categories.map((category, index) => {
    return (
      <Dropdown.Item
        data-cy={`${category.toLowerCase()}-category`}
        as={Link}
        to={{ pathname: `/category/${category.toLowerCase()}` }}
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

// <Dropdown.Item
//             as={Link}
//             to={{
//               pathname: "/category/business",
//             }}
//             data-cy="business-category"
//           >
//             Business
//           </Dropdown.Item>
//           <Dropdown.Item
//             as={Link}
//             to={{
//               pathname: "/category/tech",
//             }}
//             data-cy="tech-category"
//           >
//             Tech
//           </Dropdown.Item>
//           <Dropdown.Item
//             as={Link}
//             to={{
//               pathname: "/category/science",
//             }}
//             data-cy="science-category"
//           >
//             Science
//           </Dropdown.Item>
