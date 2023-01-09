import React from "react";
import { INews } from "../../types/news";

interface NewsProps {
  news: INews[];
}

const News: React.FC<NewsProps> = ({ news }) => {
  const showNews = news.map((item) => {
    return (
      <div key={item.uuid} className="news__item">
        <div className="news__item_date">
          {new Date(item.published_at).toLocaleString()}
        </div>
        <div className="news__item_title">{item.title}</div>
        <div className="news__item_img">
          <img src={item.image_url} alt="image_news" />
        </div>
        <div className="news__item_description">{item.description}</div>
        <div className="news__item_link">
          <a href={item.url} target="_blank" rel="noreferrer">
            Read more
          </a>
        </div>
        <div className="news__item_source">Source: {item.source}</div>
      </div>
    );
  });

  return (
    <section className="news">
      <div className="news__container">
        <div className="news__title">Breaking news</div>
        {news.length > 0 ? (
          showNews
        ) : (
          <div className="news__empty">There are not news!</div>
        )}
      </div>
    </section>
  );
};

export default News;
