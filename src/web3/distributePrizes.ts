import { MatchesApi } from "../api";
import { IDistributePrizesPayload } from "../types/matches";

export const distributePrizesInContract = async ({
  _idMongo,
  ethIndex,
  winner,
  contract,
}: IDistributePrizesPayload) => {
  let indexResult: number;

  contract.once("DistributedPrizes", (success, accountWinners) => {
    console.log(accountWinners); //in developing

    const distributedPrizes = async () => {
      const result = await MatchesApi.distributePrizes(
        _idMongo,
        winner,
        indexResult,
        success
      );
      console.log(result); // alert
    };
    distributedPrizes();
  });

  if (winner.split(" - ")[0] > winner.split(" - ")[1]) {
    indexResult = 1;
  } else if (winner.split(" - ")[0] < winner.split(" - ")[1]) {
    indexResult = 2;
  } else {
    indexResult = 3;
  }

  const tx = await contract.distributePrizes(ethIndex, indexResult);

  return tx;
};
