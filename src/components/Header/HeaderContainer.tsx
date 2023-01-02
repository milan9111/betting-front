import React from "react";
import './header.scss';
import { headerContent } from "../../content/headerContent";
import Header from "./Header";



const HeaderContainer = () => {
    return(
        <>
            <Header headerContent={headerContent}/>
        </>
    );
}

export default HeaderContainer;