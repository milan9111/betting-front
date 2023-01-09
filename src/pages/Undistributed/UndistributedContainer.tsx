import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./undistributed.scss";
import { getUndistributedMatches } from "../../redux/actions";
import {
  IOpenedLeagueReducer,
  ISocketEventUpdatedGame,
} from "../../types/matches";
import { undistributedContent } from "../../content/undistributedContent";
import { socket } from "../../sockets";
import { notificationSuccess } from "../../helpers/notificationSuccess";
import Undistributed from "./Undistributed";

const UndistributedContainer = () => {
  const unDistributedMatches = useSelector(
    (state: IOpenedLeagueReducer) =>
      state.openedLeagueReducer.unDistributedMatches
  );
  const [updateTimeGame, setUpdateTimeGame] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("updatedMatch", (data: ISocketEventUpdatedGame) => {
      setUpdateTimeGame(data.updateTime);
      notificationSuccess(data);
    });
    dispatch(getUndistributedMatches());
    return () => {
      socket.off("updatedMatch");
    };
  }, [dispatch, updateTimeGame]);

  return (
    <Undistributed
      matches={unDistributedMatches}
      undistributedContent={undistributedContent}
    />
  );
};

export default UndistributedContainer;
