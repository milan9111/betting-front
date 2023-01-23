import React from "react";
import "./mainLayouts.scss";
import AsideContainer from "../components/Aside/AsideContainer";
import FooterContainer from "../components/Footer/FooterContainer";
import HeaderContainer from "../components/Header/HeaderContainer";
import MenuContainer from "../components/Menu/MenuContainer";
import { useSelector } from "react-redux";
import { IPreloaderReducer } from "../types/preloader";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayouts: React.FC<MainLayoutProps> = ({ children }) => {
  const isLoading = useSelector(
    (state: IPreloaderReducer) => state.preloaderReducer.loading
  );

  return (
    <>
      <HeaderContainer />
      <main
        className={
          isLoading
            ? "mainLayouts__content mainLayouts__none"
            : "mainLayouts__content"
        }
      >
        <MenuContainer />
        {children}
        <AsideContainer />
      </main>
      <FooterContainer />
    </>
  );
};

export default MainLayouts;
