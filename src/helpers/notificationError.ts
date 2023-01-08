import { notification } from "antd";
import { AxiosError } from "axios";

export const notificationError = (e: AxiosError | any) => {
  if (!e) return;

  let description: string = "";
  if (e?.error?.message) {
    description = e.error.message.split(":")[1].trim(); // smart contract error
  } else if (e.reason) {
    description = `${e.reason}!`; // wallet error
  } else {
    description = e.message;
  }

  notification.error({
    message: "Error",
    description: description,
  });
};
