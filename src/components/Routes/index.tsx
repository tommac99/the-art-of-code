import { FC } from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import {
  HomePage,
  AboutPage,
  ContactPage,
  AnimationsPage,
  BugsPage,
  HooksPage,
  ProjectsPage,
  ResourcesPage,
  FloatingYouTubeHook,
  SettingsHook,
} from "../../pages";

export const Routes: FC = () => {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path={`/`} component={HomePage} />
      <Route exact path={`/about`} component={AboutPage} />
      <Route exact path={`/contact`} component={ContactPage} />
      <Route exact path={`/projects`} component={ProjectsPage} />
      <Route exact path={`/hooks`} component={HooksPage} />
      <Route
        exact
        path={`/hooks/floating-youtube-player`}
        component={FloatingYouTubeHook}
      />
      <Route exact path={`/hooks/settings`} component={SettingsHook} />

      <Route exact path={`/resources`} component={ResourcesPage} />
      <Route exact path={`/bugs`} component={BugsPage} />
      <Route exact path={`/animations`} component={AnimationsPage} />
    </AnimatedSwitch>
  );
};
