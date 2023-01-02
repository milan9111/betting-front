import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IFooterContent } from "../../types/contents";

interface footerProps {
  footerContent: IFooterContent;
}

const Footer: React.FC<footerProps> = ({ footerContent }) => {
  const footerLinks = footerContent.links.map((item) => {
    return (
      <li key={item.id} className="footer__link">
        <NavLink to={item.link}>{item.name}</NavLink>
      </li>
    );
  });

  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__menu">
          <ul>{footerLinks}</ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
