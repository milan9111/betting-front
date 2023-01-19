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
        <h3 className="news__item_title">{item.title}</h3>
        <div className="news__item_img">
          <img src={item.image_url} alt="image_news" />
        </div>
        <p className="news__item_description">{item.description}</p>
        <div className="news__item_link">
          <a href={item.url} target="_blank" rel="noreferrer">
            Read more
          </a>
        </div>
        <p className="news__item_source">Source: {item.source}</p>
      </div>
    );
  });

  return (
    <section className="news">
      <div className="news__container">
        <h2 className="news__title">Breaking news</h2>
        {news.length > 0 ? (
          showNews
        ) : (
          <p className="news__empty">There are not news!</p>
        )}
      </div>
    </section>
  );
};

export default News;
