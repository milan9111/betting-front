import { ethers } from "ethers";


export const connectWallet = async () => {
   let userAccount:string = "";
   let userBalance: string = "";
   const provider = new ethers.providers.Web3Provider(window.ethereum)

   if(window.ethereum === undefined) {
        console.log("Please install Metamask!");
        return;
   }
   [userAccount] = await provider.send("eth_requestAccounts", []);
   userBalance = (await provider.getBalance(userAccount)).toString();
   return {userAccount, userBalance};
}
 


