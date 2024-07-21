import React from "react";

import { HashRouter } from "react-router-dom";

import { Normalize } from "styled-normalize";
import { AppRoutes } from "./routes";

import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/Theme";

export default function App() {
  return (
    <HashRouter>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </HashRouter>
  );
}
