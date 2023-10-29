import {
  Text,
  Paper,
  Stack,
  Group,
  Button,
  Modal,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { StatsGridBudget } from "../../components/StatsGridBudgets";
import { TableScrollArea } from "../../components/TableScrollArea";
import Layout from "../../components/layout";
import { useState } from "react";

export default function () {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Add expense"
        centered
        padding={"lg"}
      >
        <Stack>
          <TextInput label="Expense title" className="space-y-2" />
          <TextInput label="Description" className="space-y-2" />
          <TextInput label="Amount" className="space-y-2" />
          <DateInput
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Date input"
            className="space-y-2"
          />
          <Button className="bg-blue-400 text-white rounded w-fit ml-auto">
            Add
          </Button>
        </Stack>
      </Modal>
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
                <Button
                  onClick={open}
                  className="bg-purple-800 rounded text-white"
                >
                  + New Expense
                </Button>
              </Group>
            </Paper>
            <TableScrollArea />
          </Stack>
        </section>
      </Layout>
    </>
  );
}
