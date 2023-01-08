import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { socket } from "../../sockets";
import { menuContent } from "../../content/menuContent";
import { getMatches } from "../../redux/actions";
import {
  IOpenedLeagueReducer,
  ISocketEventCreatedGame,
  ISocketEventUpdatedGame,
} from "../../types/matches";
import { openedLeagueContent } from "../../content/openedLeague";
import OpenedLeague from "./OpenedLeague";
import { notificationSuccess } from "../../helpers/notificationSuccess";

const OpenedLeagueContainer = () => {
  const state = useSelector(
    (state: IOpenedLeagueReducer) => state.openedLeagueReducer
  );
  const [idCreatedGame, setIdCreatedGame] = useState<number>(0);
  const [updateTimeGame, setUpdateTimeGame] = useState<number>(0);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    socket.on("createdMatch", (data: ISocketEventCreatedGame) => {
      console.log(data);
      setIdCreatedGame(data.odds_id);
      notificationSuccess(data);
    });
    socket.on("updatedMatch", (data: ISocketEventUpdatedGame) => {
      setUpdateTimeGame(data.updateTime);
      notificationSuccess(data);
    });

    const date = new Date().toISOString().split("T")[0];
    const page = menuContent.links.find(
      (item) => item.link === `/${location.pathname.split("/")[1]}`
    );
    const leagueId = location.pathname.split("/")[2];

    page?.countryId && dispatch(getMatches(date, page.countryId, leagueId));

    return () => {
      socket.off("createdMatch");
      socket.off("updatedMatch");
    };
  }, [location.pathname, dispatch, idCreatedGame, updateTimeGame]);

  return (
    <OpenedLeague matches={state} openedLeagueContent={openedLeagueContent} />
  );
};

export default OpenedLeagueContainer;
