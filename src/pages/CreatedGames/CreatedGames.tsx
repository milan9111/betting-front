import React from "react";
import CreatedGamesTable from "../../components/Tables/CreatedGamesTable";
import { ICreatedGamesContent } from "../../types/contents";
import { ICreatedGames } from "../../types/matches";

interface CreatedGamesProps {
  createdGamesContent: ICreatedGamesContent;
  createdGames: ICreatedGames[];
}

const CreatedGames: React.FC<CreatedGamesProps> = ({
  createdGamesContent,
  createdGames,
}) => {
  return (
    <section className="createdGames">
      <div className="createdGames__container">
        <h2 className="createdGames__title">{createdGamesContent.title}</h2>
        <div className="createdGames__table">
          <CreatedGamesTable createdGames={createdGames} />
        </div>
      </div>
    </section>
  );
};

export default CreatedGames;
