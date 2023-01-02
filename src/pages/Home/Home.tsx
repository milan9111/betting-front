import React from "react";
import { IHomeContent } from "../../types/contents";

interface HomeProps {
  homeContent: IHomeContent;
}

const Home: React.FC<HomeProps> = ({ homeContent }) => {
  return (
    <section className="home">
      <div className="home__container">
        <div className="home__banner">
          <h1 className="home__title">{homeContent.title}</h1>
          <p className="home__subtitle">{homeContent.subtitle}</p>
        </div>
        <p className="home__text"></p>
      </div>
    </section>
  );
};

export default Home;
