import React from "react";
import { IHomeContent } from "../../types/contents";

interface HomeProps {
  homeContent: IHomeContent;
  connectWallet: () => void;
}

const Home: React.FC<HomeProps> = ({ homeContent, connectWallet }) => {
  return (
    <section className="home">
      <div className="home__container">
        <div className="home__banner">
          <h1 className="home__title">{homeContent.title}</h1>
          <p className="home__subtitle">{homeContent.subtitle}</p>
          <button className="home__button" onClick={connectWallet}>
            {homeContent.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
