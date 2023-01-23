import React from "react";
import { useSelector } from "react-redux";
import "./preloader.scss";
import preloaderImg from "./../../assets/images/preloader.gif";
import { IPreloaderReducer } from "../../types/preloader";

const Preloader: React.FC = () => {
  const isLoading = useSelector(
    (state: IPreloaderReducer) => state.preloaderReducer.loading
  );

  return (
    <div className={isLoading ? "preloader__block" : "preloader__none"}>
      <div className="preloader__container">
        <img src={preloaderImg} className="preloader__img" alt="Loading..." />
        <p className="preloader__text">Connecting...</p>
      </div>
    </div>
  );
};

export default Preloader;
