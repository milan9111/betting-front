import { ethers } from "ethers";
import contractArtifact from "./abi.json";

const contractAddress = "0xf2bdC8E5fECa33Ab8C3Bfd32c89D8551f22d8dA4";

export const connectWallet = async () => {
  let userAccount: string = "";
  let userBalance: string = "";
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  if (window.ethereum === undefined) {
    console.log("Please install Metamask!"); // alert
    return;
  }
  [userAccount] = await provider.send("eth_requestAccounts", []);
  userBalance = (await provider.getBalance(userAccount)).toString();

  const contract = new ethers.Contract(
    contractAddress,
    contractArtifact.output.abi,
    provider.getSigner(0)
  );

  console.log(
    userAccount,
    Number(ethers.utils.formatEther(userBalance)).toFixed(5)
  ); // alert

  return { userAccount, userBalance, contract };
};
