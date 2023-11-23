import React, { Suspense, lazy, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getheader, getfooter } from './store/homeAction/action';

import "./App.scss";
import "./variables/colorVariables.module.scss";
import "./variables/sizeVariables.module.scss";

import Home from "./page/home";
import RiskFall from "./page/riskFall";
import AssessmentLanding from "./page/assessmentLanding";
import AssessmentQuestion from "./page/assessment"

const Header = lazy(() => import("./component/header"));
const Footer = lazy(() => import("./component/footer"));

const App = () => {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.header);
  const footer = useSelector((state) => state.footer);
  useEffect(() => {
    dispatch(getheader());
    dispatch(getfooter());
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Suspense fallback={null}>
          <Router>
            <Header data={header} />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/risk-fall" element={<RiskFall />} exact />
              <Route
                path="/assessment"
                element={<AssessmentLanding />}
                exact
              />
              <Route
                path="/assessment/:question"
                element={<AssessmentQuestion />}
                exact
              />
            </Routes>
            <Footer data={footer} />
          </Router>
        </Suspense>
      </ThemeProvider>
    </div>
  );
};

export default App;
