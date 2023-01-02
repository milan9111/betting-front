import React from "react";
import './menu.scss';
import { menuContent } from "../../content/menuContent";
import Menu from "./Menu";



const MenuContainer = () => {
    return(
        <>
            <Menu menuContent={menuContent}/>
        </>
    )
}

export default MenuContainer;