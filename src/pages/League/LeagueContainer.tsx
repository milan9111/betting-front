import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getLeagues } from "../../redux/actions";
import { ILeagueReducer } from "../../types/leagues";
import "./league.scss";
import { menuContent } from "../../content/menuContent";
import League from "./League";

const LeagueContainer = () => {
  const state = useSelector(
    (state: ILeagueReducer) => state.leagueReducer.result
  );
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const page = menuContent.links.find(
      (item) => item.link === location.pathname
    );
    page?.countryId && dispatch(getLeagues(page.countryId));
  }, [location.pathname, dispatch]);

  return (
    <>
      <Helmet>
        <title>Betting dApp | Leagues</title>
      </Helmet>
      <League result={state} />
    </>
  );
};

export default LeagueContainer;
