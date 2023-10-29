import {
  Badge,
  Group,
  Paper,
  Stack,
  Text,
  SimpleGrid,
  Box,
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
      <section className=" p-6">
        <Stack className="space-y-10">
          <Paper withBorder radius={"md"} className="p-6">
            <Stack className="space-y-4">
              <Text className="text-xl">Income Stream</Text>
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

          <Box className="space-y-6">
            <Text className="text-xl">Income Streams</Text>
            <SimpleGrid cols={4}>
              {streams.map((stream, index) => {
                return (
                  <Link key={index} href="/streams/23432">
                    <StreamCard detail={stream} />
                  </Link>
                );
              })}
            </SimpleGrid>

            <Group justify="end">
              <Button variant="default">
                <Text className="mr-2">See more</Text> <IconArrowRight />
              </Button>
            </Group>
          </Box>

          <Paper
            withBorder
            p="md"
            radius="md"
            className="bg-transparent border-black"
          >
            <Paper p="md" radius="md" className="bg-purple-800/20">
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
