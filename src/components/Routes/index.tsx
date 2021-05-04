import { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { Routes as RouteData } from "../../constants";
import {
  HomePage,
  AboutPage,
  ContactPage,
  AnimationsPage,
  BugsPage,
  HooksPage,
  ProjectsPage,
  ResourcesPage,
} from "../../pages";

import { Root } from "./styles";

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
      <Route exact path={`/resources`} component={ResourcesPage} />
      <Route exact path={`/bugs`} component={BugsPage} />
      <Route exact path={`/animations`} component={AnimationsPage} />
    </AnimatedSwitch>
  );
};
