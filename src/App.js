import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "./portfolio";
import ReactGA from "react-ga";
import { MessageProvider } from "./context/MessageContext";
import { SwitchButtonProvider } from "./context/SwitchButtonContext";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          <MessageProvider>
            <SwitchButtonProvider>
              {useCursor ? (
                <CursorProvider
                  color={themes[theme].secondaryText}
                  ringSize={25}
                  transitionTime={75}
                >
                  <Main theme={themes[theme]} setTheme={setTheme} />
                </CursorProvider>
              ) : (
                <Main theme={themes[theme]} setTheme={setTheme} />
              )}
            </SwitchButtonProvider>
          </MessageProvider>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
