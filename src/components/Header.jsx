import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Menu, Dropdown, Select, Image } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import logo from "../img/logo.png";

const Header = () => {
  const { categories } = useSelector((state) => state);
  const { t } = useTranslation();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });

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
    { key: "en", value: "en", text: t("languageNames.english") },
    { key: "sv", value: "sv", text: t("languageNames.swedish") },
  ];

  return (
    <div>
      <Menu inverted data-cy="header">
        <Menu.Item
          id="home"
          name="home"
          as={Link}
          to={{ pathname: "/" }}
          data-cy="home"
        >
          <Image size="small" src={logo}></Image>
        </Menu.Item>
        {isTabletOrMobile && (
          <Dropdown item text={t("categories")} data-cy="mobile-category-list">
            <Dropdown.Menu>{categoriesList}</Dropdown.Menu>
          </Dropdown>
        )}
        {!isTabletOrMobile && (
          <>
            <Menu.Item position="right">
              <Select
                data-cy="language-selector"
                placeholder={t("chooseLanguage")}
                options={languageOptions}
                onChange={(event, data) => {
                  i18n.changeLanguage(data.value);
                }}
              ></Select>
            </Menu.Item>
            <Menu.Item
              id="sign-up"
              name="Sign Up"
              as={Link}
              to={{ pathname: "/register" }}
              data-cy="sign-up-button"
            ></Menu.Item>
          </>
        )}
      </Menu>
      {isTabletOrMobile && (
        <Select
          data-cy="language-selector"
          placeholder={t("chooseLanguage")}
          options={languageOptions}
          onChange={(event, data) => {
            i18n.changeLanguage(data.value);
          }}
        ></Select>
      )}
    </div>
  );
};

export default Header;
