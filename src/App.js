import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.scss";
import "./variables/colorVariables.module.scss";
import "./variables/sizeVariables.module.scss";

import Home from "./page/home";
import RiskFall from "./page/riskFall";

const Header = lazy(() => import("./component/header"));
const Footer = lazy(() => import("./component/footer"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/risk-fall",
    element: <RiskFall />
  }
]);


const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Suspense fallback={null}>
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </Suspense>
      </ThemeProvider>
    </div>
  );
};

export default App;
