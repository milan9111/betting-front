import { IMenuContent, IMenuContetentUndistributed } from "../types/contents";
import fifa from "../assets/images/fifa.png";
import uefa from "../assets/images/uefa.png";
import england from "../assets/images/england.png";
import spain from "../assets/images/spain.png";
import italy from "../assets/images/italy.png";
import france from "../assets/images/france.png";
import germany from "../assets/images/germany.png";
import ethereum from "../assets/images/ethereum.png";

export const menuContent: IMenuContent = {
  title: "Leagues",
  links: [
    {
      id: 0,
      logo: fifa,
      name: "FIFA",
      link: "/fifa-leagues",
      countryId: "8",
    },
    {
      id: 1,
      logo: uefa,
      name: "UEFA",
      link: "/uefa-leagues",
      countryId: "1",
    },
    {
      id: 2,
      logo: england,
      name: "England",
      link: "/england-leagues",
      countryId: "44",
    },
    {
      id: 3,
      logo: spain,
      name: "Spain",
      link: "/spain-leagues",
      countryId: "6",
    },
    {
      id: 4,
      logo: italy,
      name: "Italy",
      link: "/italy-leagues",
      countryId: "5",
    },
    {
      id: 5,
      logo: france,
      name: "France",
      link: "/france-leagues",
      countryId: "3",
    },
    {
      id: 6,
      logo: germany,
      name: "Germany",
      link: "/germany-leagues",
      countryId: "4",
    },
  ],
};

export const menuContentUndistributed: IMenuContetentUndistributed = {
  title: "Matches",
  links: [
    {
      id: 0,
      logo: ethereum,
      name: "Undistributed",
      link: "/undistributed-prizes",
    },
  ],
};
