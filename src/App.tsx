import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appContent } from "./content/appContent";
import { getUserAccount } from "./redux/actions";
import MainLayouts from "./layouts/MainLayouts";
import HomeContainer from "./pages/Home/HomeContainer";
import GuideContainer from "./pages/Guide/GuideContainer";
import NewsContainer from "./pages/News/NewsContainer";
import OwnerContainer from "./pages/Owner/OwnerContainer";
import LeagueContainer from "./pages/League/LeagueContainer";
import OpenedLeagueContainer from "./pages/League/OpenedLeagueContainer";
import UndistributedContainer from "./pages/Undistributed/UndistributedContainer";
import Error from "./pages/Error/Error";
import CreatedGamesContainer from "./pages/CreatedGames/CreatedGamesContainer";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.ethereum) {
      dispatch(getUserAccount());
      window.ethereum.on("accountsChanged", async () => {
        dispatch(getUserAccount());
      });
    } else {
      dispatch(getUserAccount());
    }
  }, [dispatch]);

  const leaguesPaths = appContent.paths.map(({ path }, index) => (
    <React.Fragment key={index}>
      <Route path={path} element={<LeagueContainer />} />
      <Route path={path + "/:id"} element={<OpenedLeagueContainer />} />
    </React.Fragment>
  ));

  return (
    <>
      <Preloader />
      <Router>
        <MainLayouts>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/guide" element={<GuideContainer />} />
            <Route path="/news" element={<NewsContainer />} />
            <Route path="/owner" element={<OwnerContainer />} />
            {leaguesPaths}
            <Route
              path="/undistributed-prizes"
              element={<UndistributedContainer />}
            />
            <Route path="/created-games" element={<CreatedGamesContainer />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </MainLayouts>
      </Router>
    </>
  );
};

export default App;
