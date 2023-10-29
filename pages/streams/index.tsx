import {
  Badge,
  Group,
  Paper,
  Stack,
  Text,
  SimpleGrid,
  Box,
  Flex,
  Anchor,
  Button,
  Modal,
  TextInput,
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
import { useDisclosure } from "@mantine/hooks";

export default function Streams() {
  const [opened, { open, close }] = useDisclosure(false);
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
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Create Stream"
        centered
        padding={"lg"}
      >
        <Stack>
          <TextInput label="Stream name" className="space-y-2" />
          <TextInput label="Description" className="space-y-2" />
          <Button className="bg-blue-400 text-white rounded w-fit ml-auto">
            Create
          </Button>
        </Stack>
      </Modal>
      <Layout>
        <section className="p-6">
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
            <SimpleGrid cols={4} className="flex-col md:flex-row">
              <Paper
                className="!w-full h-full text-4xl text-gray-400 flex items-center justify-center hover:cursor-pointer"
                withBorder
                p="md"
                onClick={open}
                radius="md"
              >
                +
              </Paper>
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
                <Text className="mr-3">See more</Text>
                <IconArrowRight />
              </Button>
            </Group>
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
    </>
  );
}
