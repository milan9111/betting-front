import { MatchesApi } from "../api";
import { ICreateGamePayload } from "../types/matches";

export const createGameInContract = async ({
  item,
  contract,
  userAccount,
}: ICreateGamePayload) => {

  // contract.once("MatchCreated", (index) => {
  //   const createGame = async () => {
  //   const result = await MatchesApi.createGame(item, userAccount, Number(index));
  //   console.log(result); // alert
  //   } 
  //   createGame();
  // });

  const coefficientOne =
    item.odds_1 && Math.floor(Number(item.odds_1.toFixed(2)) * 100);
  const coefficientTwo =
    item.odds_2 && Math.floor(Number(item.odds_2.toFixed(2)) * 100);
  const coefficientDraw =
    item.odds_x && Math.floor(Number(item.odds_x.toFixed(2)) * 100);
  const startMatch =
    new Date(`${item.event_date} ${item.event_time}`).getTime() / 1000 + 3600; //3600  GMT+2
  const endMatch = startMatch + 10800;

  const tx = await contract.createMatch(
    coefficientOne,
    coefficientTwo,
    coefficientDraw,
    startMatch,
    endMatch
  );

  return tx;
};
