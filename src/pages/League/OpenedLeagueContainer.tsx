import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { menuContent } from "../../content/menuContent";
import { getMatches } from "../../redux/actions";
import { IOpenedLeagueReducer } from "../../types/matches";
import { openedLeagueContent } from "../../content/openedLeague";
import OpenedLeague from "./OpenedLeague";

const OpenedLeagueContainer = () => {
  const state = useSelector(
    (state: IOpenedLeagueReducer) => state.openedLeagueReducer
  );
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const date = new Date().toISOString().split("T")[0];
    const page = menuContent.links.find(
      (item) => item.link === `/${location.pathname.split("/")[1]}`
    );
    const leagueId = location.pathname.split("/")[2];

    page?.countryId && dispatch(getMatches(date, page.countryId, leagueId));
  }, [location.pathname, dispatch]);

  return (
    <OpenedLeague matches={state} openedLeagueContent={openedLeagueContent} />
  );
};

export default OpenedLeagueContainer;
