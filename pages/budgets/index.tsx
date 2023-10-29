import { useDisclosure } from "@mantine/hooks";
import {
  Paper,
  Text,
  Badge,
  Flex,
  Stack,
  Modal,
  Button,
  TextInput,
} from "@mantine/core";
import { StatsGrid } from "../../components/StatsGrid";
import Layout from "../../components/layout";
import Link from "next/link";
import BudgetCard from "../../components/BudgetCard";

export default function Budgets() {
  const [opened, { open, close }] = useDisclosure(false);
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
      <Modal
        opened={opened}
        onClose={close}
        title="Create Budget"
        centered
        padding={"lg"}
      >
        <Stack>
          <TextInput label="Budget title" className="space-y-2" />
          <Button className="bg-blue-400 text-white rounded w-fit ml-auto">
            Create
          </Button>
        </Stack>
      </Modal>
      <Layout>
        <main>
          <StatsGrid />
          <section>
            <Stack>
              <Text>Budgets</Text>
              <Flex
                align={"center"}
                gap={"md"}
                className="flex-col md:flex-row"
              >
                <Button className="w-screen md:w-44 h-[140px]" onClick={open}>
                  <Paper
                    className="w-screen md:w-44 h-[136px] text-4xl text-gray-400 flex items-center justify-center hover:cursor-pointer"
                    withBorder
                    p="md"
                    radius="md"
                  >
                    +
                  </Paper>
                </Button>
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
