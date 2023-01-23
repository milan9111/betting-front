import React from "react";
import preloaderImg from "./../../assets/images/preloader.gif";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <img src={preloaderImg} className="preloader__img" alt="Loading..." />
        <p className="preloader__text">Please wait...</p>
      </div>
    </div>
  );
};

export default Preloader;
