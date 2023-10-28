import Head from "next/head";
import Layout from "../components/layout";
import { StatsGrid } from "../components/StatsGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>{""}</title>
      </Head>
      <section className={""}>
        <StatsGrid />
      </section>
    </>
  );
}
