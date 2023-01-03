interface IHeaderLogo {
  src: string;
  link: string;
}

interface IHeaderLink {
  id: number;
  name: string;
  link: string;
}

interface IHeaderButtons {
  id: number;
  name: string;
  link: string;
}

export interface IHeaderContent {
  logo: IHeaderLogo;
  links: IHeaderLink[];
  buttons: IHeaderButtons[];
}

interface IMenuLink {
  id: number;
  logo: string;
  name: string;
  link: string;
  countryId: string;
}

export interface IMenuContent {
  title: string;
  links: IMenuLink[];
}

export interface IHomeContent {
  title: string;
  subtitle: string;
  button: string;
}

export interface IAsideContent {
  title: string;
  img: string;
  userTitle: string;
  chatTitle: string;
}

interface IFooterLink {
  id: number;
  name: string;
  link: string;
}

export interface IFooterContent {
  links: IFooterLink[];
}

interface IAppPath {
  path: string;
}

export interface IAppContent {
  paths: IAppPath[];
}

export interface IOpenedLeagueContent {
  titleNextMatches: string;
  titleFinishedMatches: string;
  titleLiveMatches: string;
}