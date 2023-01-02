import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IHeaderContent } from "../../types/contents";

interface HeaderProps {
  headerContent: IHeaderContent;
}

const Header: React.FC<HeaderProps> = ({ headerContent }) => {
  const menuLinks = headerContent.links.map((item) => {
    return (
      <li key={item.id} className="header__link">
        <NavLink to={item.link}>{item.name}</NavLink>
      </li>
    );
  });

  const buttons = headerContent.buttons.map((item) => {
    return (
      <li key={item.id} className="header__button">
        <NavLink to={item.link}>{item.name}</NavLink>
      </li>
    );
  });

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to={headerContent.logo.link}>
            <img
              className="header__logo_img"
              src={headerContent.logo.src}
              alt="Logo"
            />
          </Link>
        </div>
        <nav className="header__menu">
          <ul>{menuLinks}</ul>
        </nav>
        <nav className="header__buttons">
          <ul>{buttons}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
