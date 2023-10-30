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
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getStreamDetail, getStreamIncome } from "../../api/streams";

export default function StreamDetails() {
  const { query } = useRouter();
  const { stream_id } = query;
  const id = stream_id as string;
  const {
    data: Stream,
    isLoading: loadingStream,
    error,
  } = useQuery({
    queryKey: ["streams", id],
    queryFn: () => getStreamDetail(id),
  });
  console.log("in streams", Stream, error);

  const {
    data: Incomes,
    isLoading: loadingIncomes,
    error: incomeError,
  } = useQuery({
    enabled: !error && !Number.isNaN(parseInt(id)),
    queryKey: ["incomes", id],
    queryFn: () => getStreamIncome(id),
  });
  console.log("expense error", Incomes, error, id);

  const getStreamTotal = () => {
    let totalStream = 0;
    Incomes &&
      Incomes.data &&
      Incomes.data.map((income) => {
        totalStream += income.amount;
      });

    return totalStream.toLocaleString();
  };

  return (
    <Layout>
      <Stack>
        <Paper withBorder radius={"md"} p={"md"}>
          <Stack>
            <Text>{Stream && Stream.data && Stream.data[0].name} Stream</Text>
            <Paper className="w-60" withBorder p="md" radius="md">
              <Group justify="space-between">
                <Text size="xs" c="dimmed">
                  Total Balance
                </Text>
                <IconDotsVertical />
              </Group>
              <Group className="pt-8">
                <Text>{getStreamTotal()}</Text>
                <IconEye />
                <Badge leftSection={<IconArrowUp size={12} />}>10%</Badge>
              </Group>
            </Paper>
          </Stack>
        </Paper>
        {/* <Group justify="end">
          <Anchor href="/">See more</Anchor>
          <IconArrowRight />
        </Group> */}
        <Paper p="md" radius="md" className="bg-purple-800/20">
          <Group justify="start">
            <Text>Received payments</Text>
          </Group>
        </Paper>
        <StreamsTable incomes={Incomes} />
      </Stack>
    </Layout>
  );
}
