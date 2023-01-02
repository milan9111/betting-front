import React from "react";
import './aside.scss';
import { asideContent } from "../../content/asideContent";
import Aside from "./Aside";



const AsideContainer = () => {
    return(
        <>
            <Aside asideContent={asideContent}/>
        </>
    );
}

export default AsideContainer;