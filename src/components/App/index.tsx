import { FC } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { HomePage } from "../../pages";

import { ScrollContext, LoadingContext } from "../../context";
import { useScrollState, useLoadingState } from "./hooks";
import { SideBar, Routes } from "../";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: FC = () => {
  const { ...scrollContextProps } = useScrollState();
  const { ...loadingContextProps } = useLoadingState();

  return (
    <ScrollContext.Provider value={scrollContextProps}>
      <ParallaxProvider>
        <LoadingContext.Provider value={loadingContextProps}>
          <Router>
            <div style={{ display: "flex" }}>
              <SideBar />
              <Routes />
            </div>
          </Router>
        </LoadingContext.Provider>
      </ParallaxProvider>
    </ScrollContext.Provider>
  );
};

export default App;
