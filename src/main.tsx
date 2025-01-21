import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import MarketingPage from "./MarketingPage";
// import Hero from "./components/Hero";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <Hero /> */}

      <MarketingPage />
    </StyledEngineProvider>
  </React.StrictMode>,
);
