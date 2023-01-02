import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import HomeContainer from "./pages/Home/HomeContainer";
import AboutUsContainer from "./pages/AboutUs/AboutUsContainer";
import TablesContainer from "./pages/Tables/TablesContainer";
import NewsContainer from "./pages/News/NewsContainer";
import ContactContainer from "./pages/Contact/ContactContainer";

const App = () => {
  return (
    <Router>
      <MainLayouts>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about-us" element={<AboutUsContainer />} />
          <Route path="/tables" element={<TablesContainer />} />
          <Route path="/news" element={<NewsContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
        </Routes>
      </MainLayouts>
    </Router>
  );
};

export default App;
