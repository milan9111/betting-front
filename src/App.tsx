import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appContent } from "./content/appContent";
import { getUserAccount } from "./redux/actions";
import MainLayouts from "./layouts/MainLayouts";
import HomeContainer from "./pages/Home/HomeContainer";
import AboutUsContainer from "./pages/AboutUs/AboutUsContainer";
import TablesContainer from "./pages/Tables/TablesContainer";
import NewsContainer from "./pages/News/NewsContainer";
import ContactContainer from "./pages/Contact/ContactContainer";
import LeagueContainer from "./pages/League/LeagueContainer";
import SignupContainer from "./pages/Signup/SignupContainer";
import LoginContainer from "./pages/Login/LoginContainer";
import OpenedLeagueContainer from "./pages/League/OpenedLeagueContainer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAccount());
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async () => {
        dispatch(getUserAccount());
      });
    }
  }, [dispatch]);

  const leaguesPaths = appContent.paths.map(({ path }, index) => (
    <React.Fragment key={index}>
      <Route path={path} element={<LeagueContainer />} />
      <Route path={path + "/:id"} element={<OpenedLeagueContainer />} />
    </React.Fragment>
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
