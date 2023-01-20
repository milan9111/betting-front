import React from "react";
import "./menu.scss";
import {
  menuContent,
  menuContentMatches,
} from "../../content/menuContent";
import Menu from "./Menu";

const MenuContainer = () => {
  return (
    <>
      <Menu
        menuContent={menuContent}
        menuContentMatches={menuContentMatches}
      />
    </>
  );
};

export default MenuContainer;
