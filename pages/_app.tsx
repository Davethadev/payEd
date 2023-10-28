import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import "../styles/globals.css";
import { AppProvider } from "../context/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "../components/layout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <MantineProvider theme={theme}>
          <Head>
            <title>Mantine Template</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
            <link rel="shortcut icon" href="/favicon.svg" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}
