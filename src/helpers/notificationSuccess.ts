import { notification } from "antd";
import { ISocketEventCreatedGame } from "../types/matches";

export const notificationSuccess = (e: any | ISocketEventCreatedGame) => {
  if (!e) return;

  let description: string = "";
  if (e.hash) {
    description = `Action hash ${e.hash}`;
  } else if (e.eth_index) {
    description = e.text;
  } else if (e.finalResult) {
    description = e.text;
  } else if (e.userAccount) {
    description = `Your account: ${e.userAccount} 
                   balance: ${e.balanceNotification}`;
  } else {
    description = "";
  }

  notification.success({
    message: "Success",
    description: description,
  });
};
