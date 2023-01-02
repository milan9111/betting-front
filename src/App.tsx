import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appContent } from "./content/appContent";
import MainLayouts from "./layouts/MainLayouts";
import HomeContainer from "./pages/Home/HomeContainer";
import AboutUsContainer from "./pages/AboutUs/AboutUsContainer";
import TablesContainer from "./pages/Tables/TablesContainer";
import NewsContainer from "./pages/News/NewsContainer";
import ContactContainer from "./pages/Contact/ContactContainer";
import LeagueContainer from "./pages/League/LeagueContainer";
import SignupContainer from "./pages/Signup/SignupContainer";
import LoginContainer from "./pages/Login/LoginContainer";

const App = () => {
  const leaguesPaths = appContent.paths.map(({ path }, index) => (
    <Route path={path} element={<LeagueContainer />} key={index} />
  ));

  return (
    <Router>
      <MainLayouts>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about-us" element={<AboutUsContainer />} />
          <Route path="/tables" element={<TablesContainer />} />
          <Route path="/news" element={<NewsContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="/signup" element={<SignupContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          {leaguesPaths}
        </Routes>
      </MainLayouts>
    </Router>
  );
};

export default App;
