import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const CategoryHeader = () => {
  const { categories } = useSelector((state) => state);
  const [activeItem, setActiveItem] = useState("business");
  const { t } = useTranslation();

  let categoriesList = categories.map((category, index) => {
    let categoryToLowerCase = category.toLowerCase();
    return (
      <Menu.Item
        data-cy={`${categoryToLowerCase}-category`}
        name={categoryToLowerCase}
        as={Link}
        to={{ pathname: `/category/${categoryToLowerCase}` }}
        key={index}
        active={activeItem === categoryToLowerCase}
        onClick={() => setActiveItem(categoryToLowerCase)}
      >
        {category}
      </Menu.Item>
    );
  });

  return (
    <Menu pointing secondary data-cy="category-list">
      {/* <Menu.Item header>{t("categories")}</Menu.Item> */}
      {categoriesList}
    </Menu>
  );
};

export default CategoryHeader;
