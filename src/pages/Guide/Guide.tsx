import React from "react";
import { IGuideContent } from "../../types/contents";

interface GuideProps {
  guideContent: IGuideContent;
}

const Guide: React.FC<GuideProps> = ({ guideContent }) => {
  const showRules = guideContent.rules.map((item) => {
    return (
      <li key={item.id} className="guide__rule">
        - {item.text};
      </li>
    );
  });

  return (
    <section className="guide">
      <div className="guide__container">
        <h2 className="guide__title">{guideContent.title}</h2>
        <ul className="guide__rules">{showRules}</ul>
      </div>
    </section>
  );
};

export default Guide;
