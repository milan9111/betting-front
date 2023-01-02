import React from "react";
import './footer.scss';
import { footerContent } from "../../content/footerContent";
import Footer from "./Footer";



const FooterContainer = () => {
    return(
        <Footer footerContent={footerContent}/>
    )
}

export default FooterContainer;