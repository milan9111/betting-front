import React from "react";
import { IOpenedLeagueContent } from "../../types/contents";
import { IOpenedLeagueState } from "../../types/matches";

interface OpenedLeagueProps {
    matches: IOpenedLeagueState;
    openedLeagueContent: IOpenedLeagueContent;
}

const OpenedLeague: React.FC<OpenedLeagueProps> = ({matches, openedLeagueContent}) => {

    return(
        <div className="openedLeague">
            <div className="openedLeague__container">
                <div className="openedLeague__title">
                    {openedLeagueContent.titleNextMatches}
                </div>
                <div className="openedLeague__table">

                </div>
            </div>
        </div>
    );
}


export default OpenedLeague;