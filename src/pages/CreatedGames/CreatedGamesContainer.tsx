import React, { useEffect, useState } from "react";
import "./createdGames.scss";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { socket } from "../../sockets";
import { getCreatedGames, onLoading } from "../../redux/actions";
import { notificationSuccess } from "../../helpers/notificationSuccess";
import { createdGamesContent } from "../../content/createdGamesContent";
import { IMatchesReducer, ISocketEventCreatedGame } from "../../types/matches";
import CreatedGames from "./CreatedGames";

const CreatedGamesContainer = () => {
  const createdGames = useSelector(
    (state: IMatchesReducer) => state.matchesReducer.createdGames
  );
  const [idCreatedGame, setIdCreatedGame] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("createdMatch", (data: ISocketEventCreatedGame) => {
      setIdCreatedGame(data.odds_id);
      notificationSuccess(data);
      dispatch(onLoading(false));
    });
    dispatch(getCreatedGames());
    return () => {
      socket.off("createdMatch");
    };
  }, [dispatch, idCreatedGame]);

  return (
    <>
      <Helmet>
        <title>Betting dApp | Created games</title>
      </Helmet>
      <CreatedGames
        createdGamesContent={createdGamesContent}
        createdGames={createdGames}
      />
    </>
  );
};

export default CreatedGamesContainer;
