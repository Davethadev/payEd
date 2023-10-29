import Head from "next/head";
import Layout from "../components/layout";
import { StatsGrid } from "../components/StatsGrid";
import Topnav from "../components/topnav";

export default function Home() {
  return (
    <>
      <Head>
        <title>{""}</title>
      </Head>
      <Layout>
        <Topnav />
        <section className={""}>
          <StatsGrid />
        </section>
      </Layout>
    </>
  );
}
