import React from "react";
import UndistributedMatchesTable from "../../components/Tables/UndistributedMatchesTable";
import { IUndistributedContent } from "../../types/contents";
import { IUndistributedMatches } from "../../types/matches";

interface UndistributedProps {
  matches: IUndistributedMatches[];
  undistributedContent: IUndistributedContent;
}

const Undistributed: React.FC<UndistributedProps> = ({
  matches,
  undistributedContent,
}) => {
  return (
    <section className="undistributed">
      <div className="undistributed__container">
        <h2 className="undistributed__title">{undistributedContent.title}</h2>
        <div className="undistributed__table">
          <UndistributedMatchesTable matches={matches} />
        </div>
      </div>
    </section>
  );
};

export default Undistributed;
