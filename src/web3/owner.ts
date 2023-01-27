import { ethers } from "ethers";

export const getAccountOwner = async (contract: ethers.Contract) => {
  const accountOwner = await contract.owner();
  return accountOwner;
};

export const getContactBalance = async (contract: ethers.Contract) => {
  const contractBalance = (await contract.getBalance()).toString();
  return contractBalance;
};
