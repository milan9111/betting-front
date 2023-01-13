import React from "react";
import './guide.scss';
import Guide from "./Guide";
import { guideContent } from "../../content/guideContent";

const GuideContainer = () => {
  return (
    <>
      <Guide guideContent={guideContent} />
    </>
  );
};

export default GuideContainer;
