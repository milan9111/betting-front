import React from "react";
import FinishedTodayMatchesTable from "../../components/Tables/FinishedTodayMatchesTable";
import LiveTodayMatchesTable from "../../components/Tables/LiveTodayMatchesTable";
import TodayMatchesTable from "../../components/Tables/TodayMatchesTable";
import { IOpenedLeagueContent } from "../../types/contents";
import { IOpenedLeagueState } from "../../types/matches";

interface OpenedLeagueProps {
  matches: IOpenedLeagueState;
  openedLeagueContent: IOpenedLeagueContent;
}

const OpenedLeague: React.FC<OpenedLeagueProps> = ({
  matches,
  openedLeagueContent,
}) => {
  return (
    <div className="openedLeague">
      <div className="openedLeague__container">
        <div className="openedLeague__title">
          {openedLeagueContent.titleNextMatches}
        </div>
        <div className="openedLeague__table">
          <TodayMatchesTable
            matches={matches.todayMatches}
            odds={matches.oddsTodayMatches}
            createdMatches={matches.todayCreatedMatches}
          />
        </div>
        <div className="openedLeague__title">
          {openedLeagueContent.titleLiveMatches}
        </div>
        <div className="openedLeague__table">
          <LiveTodayMatchesTable matches={matches.liveTodayMatches} />
        </div>
        <div className="openedLeague__title">
          {openedLeagueContent.titleFinishedMatches}
        </div>
        <div className="openedLeague__table">
          <FinishedTodayMatchesTable
            matches={matches.finishedTodayMatches}
            createdMatches={matches.todayCreatedMatches}
          />
        </div>
      </div>
    </div>
  );
};

export default OpenedLeague;
