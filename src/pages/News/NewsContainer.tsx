import React, { useEffect } from "react";
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
      <News news={news} />
    </>
  );
};

export default NewsContainer;
