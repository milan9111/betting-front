import { ethers } from "ethers";
import { IBidMatchPayload } from "../types/matches";

export const betMatchInContract = async ({
  ethIndex,
  teamSelected,
  bidValue,
  contract,
}: IBidMatchPayload) => {
  const bidValueToWei = String(ethers.utils.parseUnits(bidValue, "ether"));

  const tx = await contract.makeBet(ethIndex, teamSelected, {
    value: bidValueToWei,
  });

  return tx;
};
