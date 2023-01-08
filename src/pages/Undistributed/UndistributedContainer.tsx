import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./undistributed.scss";
import { getUndistributedMatches } from "../../redux/actions";
import { IOpenedLeagueReducer } from "../../types/matches";
import { undistributedContent } from "../../content/undistributedContent";
import Undistributed from "./Undistributed";

const UndistributedContainer = () => {
  const unDistributedMatches = useSelector(
    (state: IOpenedLeagueReducer) =>
      state.openedLeagueReducer.unDistributedMatches
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUndistributedMatches());
  }, [dispatch]);

  return (
    <Undistributed
      matches={unDistributedMatches}
      undistributedContent={undistributedContent}
    />
  );
};

export default UndistributedContainer;
