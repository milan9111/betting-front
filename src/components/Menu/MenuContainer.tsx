import React from "react";
import "./menu.scss";
import {
  menuContent,
  menuContentUndistributed,
} from "../../content/menuContent";
import Menu from "./Menu";

const MenuContainer = () => {
  return (
    <>
      <Menu
        menuContent={menuContent}
        menuContentUndistributed={menuContentUndistributed}
      />
    </>
  );
};

export default MenuContainer;
