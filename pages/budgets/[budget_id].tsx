import { Text, Paper, Stack, Group, Button } from "@mantine/core";
import { StatsGridBudget } from "../../components/StatsGridBudgets";
import { TableScrollArea } from "../../components/TableScrollArea";
import Layout from "../(main)/layout";

export default function () {
  return (
    <Layout>
      <section>
        <Stack>
          <Paper withBorder p="md" radius="md">
            <Stack>
              <Text>Budget Title</Text>
              <StatsGridBudget />
            </Stack>
          </Paper>
          <Paper p="md" radius="md" className="bg-purple-200">
            <Group justify="space-between">
              <Text>Expenses</Text>
              <Button className="bg-purple-800 rounded text-white">
                + New Expense
              </Button>
            </Group>
          </Paper>
          <TableScrollArea />
        </Stack>
      </section>
    </Layout>
  );
}
