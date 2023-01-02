import React from "react";
import "./mainLayouts.scss";
import AsideContainer from "../components/Aside/AsideContainer";
import FooterContainer from "../components/Footer/FooterContainer";
import HeaderContainer from "../components/Header/HeaderContainer";
import MenuContainer from "../components/Menu/MenuContainer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayouts: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <main className="mainLayouts__content">
        <MenuContainer />
        {children}
        <AsideContainer />
      </main>
      <FooterContainer />
    </>
  );
};

export default MainLayouts;
