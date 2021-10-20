import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, Dropdown, Select } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { categories } = useSelector((state) => state);
  const { t } = useTranslation();

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

  const languageOptions = [
    { key: 'en', value: 'en', text: 'English' },
    { key: 'sv', value: 'sv', text: 'Swedish' }
  ]

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
      <Menu.Item data-cy="greeting">{t("greeting")}</Menu.Item>
      <Dropdown item text={t("categories")} data-cy="category-list">
        <Dropdown.Menu>{categoriesList}</Dropdown.Menu>
      </Dropdown>
      <Menu.Item position="right" inverted>
        <Select data-cy="language-selector" placeholder="Choose Language" options={languageOptions} ></Select>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
