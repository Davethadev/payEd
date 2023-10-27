import Head from "next/head";
import Layout from "../components/layout";
import { StatsGrid } from "../components/StatsGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>{""}</title>
      </Head>
      <Layout>
        <section className={""}>
          <StatsGrid />
        </section>
      </Layout>
    </>
  );
}
