import React, { useEffect, useState } from "react";
import "./createdGames.scss";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../sockets";
import { getCreatedGames } from "../../redux/actions";
import { notificationSuccess } from "../../helpers/notificationSuccess";
import { createdGamesContent } from "../../content/createdGamesContent";
import {
  IOpenedLeagueReducer,
  ISocketEventCreatedGame,
} from "../../types/matches";
import CreatedGames from "./CreatedGames";

const CreatedGamesContainer = () => {
  const createdGames = useSelector(
    (state: IOpenedLeagueReducer) => state.openedLeagueReducer.createdGames
  );
  const [idCreatedGame, setIdCreatedGame] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("createdMatch", (data: ISocketEventCreatedGame) => {
      setIdCreatedGame(data.odds_id);
      notificationSuccess(data);
    });
    dispatch(getCreatedGames());
    return () => {
      socket.off("createdMatch");
    };
  }, [dispatch, idCreatedGame]);

  return (
    <CreatedGames
      createdGamesContent={createdGamesContent}
      createdGames={createdGames}
    />
  );
};

export default CreatedGamesContainer;
