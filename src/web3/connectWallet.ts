import { ethers } from "ethers";
import { notificationError } from "../helpers/notificationError";
import { notificationSuccess } from "../helpers/notificationSuccess";
import contractArtifact from "./abi.json";

export const contractAddress = "0xf2bdC8E5fECa33Ab8C3Bfd32c89D8551f22d8dA4";

export const connectWallet = async () => {
  let userAccount: string = "";
  let userBalance: string = "0";

  if (window.ethereum === undefined) {
    notificationError({ message: "Please install Metamask!" });
    return { userAccount, userBalance };
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  [userAccount] = await provider.send("eth_requestAccounts", []);
  userBalance = (await provider.getBalance(userAccount)).toString();

  const contract = new ethers.Contract(
    contractAddress,
    contractArtifact.output.abi,
    provider.getSigner(0)
  );

  let balanceNotification = `${Number(
    ethers.utils.formatEther(userBalance)
  ).toFixed(5)} ETH`;

  notificationSuccess({ userAccount, balanceNotification });

  return { userAccount, userBalance, contract };
};
