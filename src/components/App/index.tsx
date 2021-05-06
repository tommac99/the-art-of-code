import { FC } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import {
  ScrollContext,
  LoadingContext,
  YouTubePlayerContext,
  SettingsContext,
} from "../../context";
import {
  useScrollState,
  useLoadingState,
  useYouTubePlayerState,
  useSettingsState,
} from "./hooks";
import { SideBar, Routes } from "../";
import { BrowserRouter as Router } from "react-router-dom";
import { Page } from "./styles";
import { YouTubePlayer, Settings } from "..";

const App: FC = () => {
  const { ...scrollContextProps } = useScrollState();
  const { ...loadingContextProps } = useLoadingState();
  const { ...youtubePlayerContextProps } = useYouTubePlayerState();
  const { ...settingsContextProps } = useSettingsState();

  return (
    <ScrollContext.Provider value={scrollContextProps}>
      <ParallaxProvider>
        <LoadingContext.Provider value={loadingContextProps}>
          <YouTubePlayerContext.Provider value={youtubePlayerContextProps}>
            <SettingsContext.Provider value={settingsContextProps}>
              <Router>
                <Page>
                  <SideBar />
                  <Routes />
                  <YouTubePlayer />
                  <Settings />
                </Page>
              </Router>
            </SettingsContext.Provider>
          </YouTubePlayerContext.Provider>
        </LoadingContext.Provider>
      </ParallaxProvider>
    </ScrollContext.Provider>
  );
};

export default App;
