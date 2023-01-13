import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import "./news.scss";
import { getNews } from "../../redux/actions";
import { INewsReducer } from "../../types/news";
import News from "./News";

const NewsContainer = () => {
  const news = useSelector((state: INewsReducer) => state.newsReducer?.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Betting dApp | News</title>
      </Helmet>
      <News news={news} />
    </>
  );
};

export default NewsContainer;
