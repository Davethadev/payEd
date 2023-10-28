import { Badge, Group, Paper, Stack, Text, Anchor } from "@mantine/core";
import Link from "next/link";
import {
  IconDotsVertical,
  IconEye,
  IconArrowUp,
  IconArrowRight,
} from "@tabler/icons-react";
import { StreamsTable } from "../../components/StreamsTable";
import Layout from "../../components/layout";

export default function StreamDetails() {
  return (
    <Layout>
      <Stack>
        <Paper withBorder radius={"md"} p={"md"}>
          <Stack>
            <Text>Stream</Text>
            <Paper className="w-60" withBorder p="md" radius="md">
              <Group justify="space-between">
                <Text size="xs" c="dimmed">
                  Total Balance
                </Text>
                <IconDotsVertical />
              </Group>
              <Group className="pt-8">
                <Text>100,635.15</Text>
                <IconEye />
                <Badge leftSection={<IconArrowUp size={12} />}>10%</Badge>
              </Group>
            </Paper>
          </Stack>
        </Paper>
        <Group justify="end">
          <Anchor href="/">See more</Anchor>
          <IconArrowRight />
        </Group>
        <Paper p="md" radius="md" className="bg-purple-200">
          <Group justify="start">
            <Text>Received payments</Text>
          </Group>
        </Paper>
        <StreamsTable />
      </Stack>
    </Layout>
  );
}
