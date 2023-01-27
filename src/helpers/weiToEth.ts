import { ethers } from "ethers";

export const getEthFromWei = (balance: string | number) => {
  return Number(ethers.utils.formatEther(balance)).toFixed(5);
};
