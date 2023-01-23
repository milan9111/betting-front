import React from "react";
import FinishedTodayMatchesTable from "../../components/Tables/FinishedTodayMatchesTable";
import LiveTodayMatchesTable from "../../components/Tables/LiveTodayMatchesTable";
import StandingTables from "../../components/Tables/StandingTables";
import TodayMatchesTable from "../../components/Tables/TodayMatchesTable";
import { IOpenedLeagueContent } from "../../types/contents";
import { IMatchesState } from "../../types/matches";

interface OpenedLeagueProps {
  matches: IMatchesState;
  openedLeagueContent: IOpenedLeagueContent;
}

const OpenedLeague: React.FC<OpenedLeagueProps> = ({
  matches,
  openedLeagueContent,
}) => {
  return (
    <section className="openedLeague">
      <div className="openedLeague__container">
        <h2 className="openedLeague__title">
          {openedLeagueContent.titleNextMatches}
        </h2>
        <div className="openedLeague__table">
          <TodayMatchesTable
            matches={matches.todayMatches}
            odds={matches.oddsTodayMatches}
            createdMatches={matches.todayCreatedMatches}
          />
        </div>
        <h2 className="openedLeague__title">
          {openedLeagueContent.titleLiveMatches}
        </h2>
        <div className="openedLeague__table">
          <LiveTodayMatchesTable matches={matches.liveTodayMatches} />
        </div>
        <h2 className="openedLeague__title">
          {openedLeagueContent.titleFinishedMatches}
        </h2>
        <div className="openedLeague__table">
          <FinishedTodayMatchesTable
            matches={matches.finishedTodayMatches}
            createdMatches={matches.todayCreatedMatches}
          />
        </div>
        <div className="openedLeague__table">
          <StandingTables standings={matches.standings} />
        </div>
      </div>
    </section>
  );
};

export default OpenedLeague;
