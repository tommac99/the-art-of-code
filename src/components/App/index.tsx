import React, { FC } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { HomePage } from "../../pages";

import { ScrollContext, LoadingContext } from "../../context";
import { useScrollState, useLoadingState } from "./hooks";
import { SideBar, Routes } from "../";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Page } from "./styles";

const App: FC = () => {
  const { ...scrollContextProps } = useScrollState();
  const { ...loadingContextProps } = useLoadingState();

  return (
    <ScrollContext.Provider value={scrollContextProps}>
      <ParallaxProvider>
        <LoadingContext.Provider value={loadingContextProps}>
          <Router>
            <Page>
              <SideBar />
              <Routes />
            </Page>
          </Router>
        </LoadingContext.Provider>
      </ParallaxProvider>
    </ScrollContext.Provider>
  );
};

export default App;
