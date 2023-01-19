import React from "react";
import LeagueTable from "../../components/Tables/LeagueTable";
import { ILeagueInFederation } from "../../types/leagues";

interface LeagueProps {
  result: ILeagueInFederation[];
}

const League: React.FC<LeagueProps> = ({ result }) => {
  return (
    <section className="league">
      <LeagueTable result={result} />
    </section>
  );
};

export default League;
