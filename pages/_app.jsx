import Head from "next/head";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useState } from "react";
import { ColorSchemeProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import SSRProvider from "react-bootstrap/SSRProvider";

import 'bootstrap/dist/css/bootstrap.min.css'

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

  console.log("version: vanta effect and slider base 1.0");

  // print version number in the console

  return (
    <>
      <Head>
        <title>Welcome to Developeer</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SessionProvider session={session}>
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
            <SSRProvider>
            <GlobalStyles />
            <NotificationsProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </NotificationsProvider>
            </SSRProvider>
            
          </MantineProvider>
        </ColorSchemeProvider>
      </SessionProvider>
    </>
  );
}
