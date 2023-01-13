interface IHeaderLogo {
  src: string;
  link: string;
}

interface IHeaderLink {
  id: number;
  name: string;
  link: string;
}

export interface IHeaderContent {
  logo: IHeaderLogo;
  links: IHeaderLink[];
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

interface IMenuLinkUndistributed {
  id: number;
  logo: string;
  name: string;
  link: string;
}

export interface IMenuContetentUndistributed {
  title: string;
  links: IMenuLinkUndistributed[];
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
  textDistributePrizesModal: string;
  textUndistributedPrizesModal: string;
}

export interface IUndistributedContent {
  title: string;
}

interface IRuledGuideContent {
  id: number;
  text: string;
}

export interface IGuideContent {
  title: string;
  rules: IRuledGuideContent[];
}