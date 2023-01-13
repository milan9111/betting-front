import React from "react";
import "./footer.scss";
import { footerContent } from "../../content/footerContent";
import { contractAddress } from "../../web3/connectWallet";
import Footer from "./Footer";

const FooterContainer = () => {
  return (
    <Footer footerContent={footerContent} contractAddress={contractAddress} />
  );
};

export default FooterContainer;
