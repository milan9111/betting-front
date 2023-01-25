import { ethers } from "ethers";

export const getAccountOwner = async(contract:ethers.Contract) => {
    const accountOwner = await contract.owner();
    return accountOwner;
}