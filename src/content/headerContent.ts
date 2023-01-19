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
      name: "News",
      link: "/news",
    },
    {
      id: 3,
      name: "Owner",
      link: "/owner",
    },
  ],
};
