import {
  Badge,
  Group,
  Paper,
  Stack,
  Text,
  Flex,
  Anchor,
  Button,
} from "@mantine/core";
import Link from "next/link";
import {
  IconDotsVertical,
  IconEye,
  IconArrowUp,
  IconArrowRight,
} from "@tabler/icons-react";
import StreamCard from "../../components/StreamCard";
import { StreamsTable } from "../../components/StreamsTable";
import Layout from "../../components/layout";

export default function Streams() {
  const streams = [
    {
      title: "Government grants",
      amount: "100,000,000($)",
    },
    {
      title: "Donation from alumni",
      amount: "25,000,000($)",
    },
    {
      title: "Revenue gotten from sales (recycled products)",
      amount: "10,000,000($)",
    },
    {
      title: "Schoolfees",
      amount: "5,000,000($)",
    },
  ];
  return (
    <Layout>
      <section className="bg-purple-100 p-6">
        <Stack>
          <Paper withBorder radius={"md"} p={"md"}>
            <Stack>
              <Text>Income Stream</Text>
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
          <Text>Income Streams</Text>
          <Flex gap={"md"}>
            {streams.map((stream, index) => {
              return (
                <Link key={index} href="/streams/23432">
                  <StreamCard detail={stream} />
                </Link>
              );
            })}
          </Flex>
          <Group justify="end">
            <Anchor className="text-black" href="/">
              See more
            </Anchor>
            <IconArrowRight />
          </Group>
          <Paper
            withBorder
            p="md"
            radius="md"
            className="bg-transparent border-black"
          >
            <Paper p="md" radius="md" className="bg-purple-200">
              <Group justify="start">
                <Text>Received payments</Text>
              </Group>
            </Paper>
            <StreamsTable />
          </Paper>
        </Stack>
      </section>
    </Layout>
  );
}
