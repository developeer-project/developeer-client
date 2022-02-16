import Head from "next/head";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import "../styles/globals.scss";
import Layout from "../components/Layout";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}>
        <NormalizeCSS />
        <GlobalStyles />
        <NotificationsProvider>
        <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
// import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }