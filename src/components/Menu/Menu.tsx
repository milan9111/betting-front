import React from "react";
import { NavLink } from "react-router-dom";
import { IMenuContent, IMenuContetentMatches } from "../../types/contents";

interface MenuProps {
  menuContent: IMenuContent;
  menuContentMatches: IMenuContetentMatches;
}

const Menu: React.FC<MenuProps> = ({ menuContent, menuContentMatches }) => {
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

  const menuLinksMatches = menuContentMatches.links.map((item) => {
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
        <h3 className="menu__title">{menuContentMatches.title}</h3>
        <div className="menu__line"></div>
        <nav className="menu__nav">
          <ul className="menu__ul">{menuLinksMatches}</ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
