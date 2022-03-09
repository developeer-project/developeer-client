import Head from "next/head";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useState } from "react";
import { ColorSchemeProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.scss";
import Layout from "../components/Layout";

export default function App(props) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  const [colorScheme, setColorScheme] = useState("light");

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Welcome to Developeer</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            /** Put your mantine theme override here */
            colorScheme,
            loader: "bars",
          }}
        >
          <NormalizeCSS />
          <GlobalStyles />
          <SessionProvider session={session}>
            <NotificationsProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </NotificationsProvider>
          </SessionProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
