import React, { useState } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import { theme as defaultTheme } from "../styles/theme/default";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <>
      <Head>
        <title>Layouts - JK</title>
        <meta name="description" content="Replicating layouts of popular websites." />
        <meta property="og:title" content="Layouts - JK" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Replicating layouts of popular websites."
        />
        <meta
          property="og:image"
          content="/layout.png"
        />
      </Head>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
}

export default MyApp;
