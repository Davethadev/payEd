import Head from "next/head";
import Layout from "../components/layout";
import { StatsGrid } from "../components/StatsGrid";
import { DashboardTable } from "../components/DashboardTable";
import { Paper, Group, Text, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export default function Home() {
  return (
    <>
      <Head>
        <title>{""}</title>
      </Head>
      <Layout>
        <section className={""}>
          <StatsGrid />
          <Paper withBorder p={"md"} radius={"md"} className="">
            <Group justify="space-between" align="center" className="py-8">
              <Text>Transaction History</Text>
              <Group>
                <DateInput placeholder="Select dates" />
                <Button className="border-1 border-gray-400 text-gray-400">
                  View report
                </Button>
              </Group>
            </Group>
            <DashboardTable />
          </Paper>
        </section>
      </Layout>
    </>
  );
}
