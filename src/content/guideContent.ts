import { IGuideContent } from "../types/contents";
import { contractAddress } from "../web3/connectWallet";

export const guideContent: IGuideContent = {
  title: "How to use Betting dApp?",
  rules: [
    {
      id: 0,
      text: "The user must have the MetaMask plugin installed, where there is an account with the test currency ETH Goerli",
    },
    {
      id: 1,
      text: "After launching the application, users will be prompted to enter their login and password in MetaMask for verification",
    },
    {
      id: 2,
      text: "Then the user needs to select a federation or country, where him also need to select a league",
    },
    {
      id: 3,
      text: "Three tables will be shown in the selected league: 'Today's matches', 'Current matches now' and 'Today's completed matches'",
    },
    {
      id: 4,
      text: "'Today's Matches' is a table that shows matches that have not started yet. The user needs to create a game in order to bet on a match. Each user only needs to create a game once. Further, all users can bet on this match. The user who created the match will receive a 5% bonus from the banking game",
    },
    {
      id: 5,
      text: "The user can only place a bet once in a match",
    },
    {
      id: 6,
      text: "Minimum bid - 0.0001 ETH, Maximum bid - 0.01 ETH",
    },
    {
      id: 7,
      text: "'Live Matches Now' is a table that shows live matches",
    },
    {
      id: 8,
      text: "Today's Completed Matches is a table that shows completed matches. Three hours after the start of the match, any user can distribute prizes",
    },
    {
      id: 9,
      text: "Matches for which prizes have not been distributed at the end of the current day will be moved to the 'Undistributed' page. The 'Undistributed' page in the menu",
    },
    {
      id: 10,
      text: "On 'Undistibuted' page, users can distribute prizes at any time",
    },
    {
      id: 11,
      text: `You can track all smart contract transactions on address: ${contractAddress}`,
    },
  ],
};
