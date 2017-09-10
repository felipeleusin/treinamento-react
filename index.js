import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Flex, Box } from "grid-styled";

import IntroPresentation from "./presentations/intro";
import ReactPresentation from "./presentations/react";

const PresentationLinks = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Apresentações</h1>
      <Flex>
        <Box width={1 / 2} style={{ textAlign: "center" }}>
          <Link to="/intro">Javascript moderno</Link>
        </Box>
        <Box width={1 / 2} style={{ textAlign: "center" }}>
          <Link to="/react">React</Link>
        </Box>
      </Flex>
    </div>
  );
};

const Presentations = () => {
  return (
    <Switch>
      <Route path="/intro" component={IntroPresentation} />
      <Route path="/react" component={ReactPresentation} />
      <Route component={PresentationLinks} />
    </Switch>
  );
};

render(<BrowserRouter><Presentations /></BrowserRouter>, document.getElementById("root"));
