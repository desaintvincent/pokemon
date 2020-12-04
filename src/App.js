import React from "react";
import Template from "./components/Template";
import Routes from "./routing/Routes";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Providers from "./providers/Providers";

export default function App() {
  return (
      <Router>
          <Providers>
              <Template>
                    <Routes />
              </Template>
          </Providers>
      </Router>
  );
}
