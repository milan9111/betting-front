import React from "react";
import { NavLink } from "react-router-dom";
import {
  IMenuContent,
  IMenuContetentUndistributed,
} from "../../types/contents";

interface MenuProps {
  menuContent: IMenuContent;
  menuContentUndistributed: IMenuContetentUndistributed;
}

const Menu: React.FC<MenuProps> = ({
  menuContent,
  menuContentUndistributed,
}) => {
  const menuLinks = menuContent.links.map((item) => {
    return (
      <li key={item.id} className="menu__link">
        <img className="menu__link_img" src={item.logo} alt="" />
        <NavLink to={item.link} className="menu__link_a">
          {item.name}
        </NavLink>
      </li>
    );
  });

  const menuLinksUndistributed = menuContentUndistributed.links.map((item) => {
    return (
      <li key={item.id} className="menu__link">
        <img className="menu__link_img" src={item.logo} alt="" />
        <NavLink to={item.link} className="menu__link_a">
          {item.name}
        </NavLink>
      </li>
    );
  });

  return (
    <div className="menu">
      <div className="menu__container">
        <h3 className="menu__title">{menuContent.title}</h3>
        <div className="menu__line"></div>
        <nav className="menu__nav">
          <ul className="menu__ul">{menuLinks}</ul>
        </nav>
        <h3 className="menu__title">{menuContentUndistributed.title}</h3>
        <div className="menu__line"></div>
        <nav className="menu__nav">
          <ul className="menu__ul">{menuLinksUndistributed}</ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
