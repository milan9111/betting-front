import React from "react";
import { NavLink } from "react-router-dom";
import { IFooterContent } from "../../types/contents";

interface footerProps {
  footerContent: IFooterContent;
  contractAddress: string;
}

const Footer: React.FC<footerProps> = ({ footerContent, contractAddress }) => {
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
        <div className="footer__contract">
          Smart Contact:{" "}
          <a
            href={`https://goerli.etherscan.io/address/${contractAddress}`}
            rel="noreferrer"
            target="_blank"
          >
            {contractAddress}
          </a>
        </div>
        <nav className="footer__menu">
          <ul>{footerLinks}</ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
