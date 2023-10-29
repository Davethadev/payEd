import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import "../styles/globals.css";
// import { AppProvider } from "../context/context";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: any) {
  const activeChain = "mumbai";
  return (
    <ThirdwebProvider
      clientId={process.env.CLIENT_ID}
      activeChain={activeChain}
    >
      <MantineProvider theme={theme}>
        <Head>
          <title>Mantine Template</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <Component {...pageProps} />
      </MantineProvider>
    </ThirdwebProvider>
  );
}
