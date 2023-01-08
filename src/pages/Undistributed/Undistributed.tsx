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
    <div className="undistributed">
      <div className="undistributed__container">
        <div className="undistributed__title">{undistributedContent.title}</div>
        <div className="undistributed__table">
          <UndistributedMatchesTable matches={matches} />
        </div>
      </div>
    </div>
  );
};

export default Undistributed;
