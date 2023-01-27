import { ethers } from "ethers";
import {
  IOwnerCheckFailedAccountAddress,
  IOwnerSendValueToContract,
} from "../types/owner";

export const getAccountOwner = async (contract: ethers.Contract) => {
  const accountOwner = await contract.owner();
  return accountOwner;
};

export const getContactBalance = async (contract: ethers.Contract) => {
  const contractBalance = (await contract.getBalance()).toString();
  return contractBalance;
};

export const sendValueToContract = async ({
  value,
  contract,
}: IOwnerSendValueToContract) => {
  const bidValueToWei = String(ethers.utils.parseUnits(value, "ether"));

  const tx = await contract.putStorageBetting({
    value: bidValueToWei,
  });
  return tx;
};

export const transferBalance = async (contract: ethers.Contract) => {
  const tx = await contract.transferStorageBetting();
  return tx;
};

export const checkFaidedAccountAddress = async ({
  failedAccountAddress,
  contract,
}: IOwnerCheckFailedAccountAddress) => {
  const res = (await contract.failedPrizes(failedAccountAddress)).toString();
  return res;
};
