import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appContent } from "./content/appContent";
import { getUserAccount } from "./redux/actions";
import MainLayouts from "./layouts/MainLayouts";
import HomeContainer from "./pages/Home/HomeContainer";
import GuideContainer from "./pages/Guide/GuideContainer";
import TablesContainer from "./pages/Tables/TablesContainer";
import NewsContainer from "./pages/News/NewsContainer";
import OwnerContainer from "./pages/Owner/OwnerContainer";
import LeagueContainer from "./pages/League/LeagueContainer";
import OpenedLeagueContainer from "./pages/League/OpenedLeagueContainer";
import UndistributedContainer from "./pages/Undistributed/UndistributedContainer";

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
          <Route path="/guide" element={<GuideContainer />} />
          <Route path="/tables" element={<TablesContainer />} />
          <Route path="/news" element={<NewsContainer />} />
          <Route path="/owner" element={<OwnerContainer />} />
          {leaguesPaths}
          <Route
            path="/undistributed-prizes"
            element={<UndistributedContainer />}
          />
        </Routes>
      </MainLayouts>
    </Router>
  );
};

export default App;
