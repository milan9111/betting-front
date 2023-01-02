import { IHeaderContent } from "../types/contents";
import logo from "../assets/images/logo.png";
 

export const headerContent: IHeaderContent = {
  logo: {
    src: logo,
    link: "/",
  },
  links: [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About us",
      link: "/about-us",
    },
    {
      id: 2,
      name: "Tables",
      link: "/tables",
    },
    {
      id: 3,
      name: "News",
      link: "/news",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
  ],
  buttons: [
    {
      id: 0,
      link: "/singup",
      name: "Singup",
    },
    {
      id: 1,
      link: "/login",
      name: "Login",
    },
  ],
};
