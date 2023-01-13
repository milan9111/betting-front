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
      name: "Guide",
      link: "/guide",
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
      name: "Owner",
      link: "/owner",
    },
  ],
};
