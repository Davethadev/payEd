import { Paper, Text, Badge, Flex, Stack } from "@mantine/core";
import { StatsGrid } from "../../components/StatsGrid";
import Layout from "../../components/layout";
import Link from "next/link";
import BudgetCard from "../../components/BudgetCard";

export default function Budgets() {
  const budget = [
    {
      title: "Housing",
      amount: "150,000",
      percentage: "10%",
    },
    {
      title: "Feeding",
      amount: "100,000",
      percentage: "2%",
    },
    {
      title: "Accomodation",
      amount: "200,000",
      percentage: "15%",
    },
    {
      title: "Others",
      amount: "130,000",
      percentage: "12%",
    },
  ];
  return (
    <>
      <Layout>
        <main>
          <StatsGrid />
          <section className="px-4">
            <Stack>
              <Text>Budgets</Text>
              <Flex align={"center"} gap={"md"}>
                <Paper
                  className="w-44 h-[136px] text-4xl text-gray-400 flex items-center justify-center hover:cursor-pointer"
                  withBorder
                  p="md"
                  radius="md"
                >
                  +
                </Paper>
                {budget.map((item) => {
                  const { title, amount, percentage } = item;
                  return (
                    <Link href={"/budgets/123324"}>
                      <BudgetCard detail={item} />
                    </Link>
                  );
                })}
              </Flex>
            </Stack>
          </section>
        </main>
      </Layout>
    </>
  );
}
