import { ILeaguesActionTypes } from "../../types/leagues"

export const getLeagues = (countryId: string) => {
    return {
        type: ILeaguesActionTypes.GET_LEAGUE,
        payload: countryId,
    }
}