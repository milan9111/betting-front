import React from "react";
import { Helmet } from 'react-helmet';
import './guide.scss';
import Guide from "./Guide";
import { guideContent } from "../../content/guideContent";

const GuideContainer = () => {
  return (
    <>
      <Helmet>
        <title>Betting dApp | Guide</title>
      </Helmet>
      <Guide guideContent={guideContent} />
    </>
  );
};

export default GuideContainer;
