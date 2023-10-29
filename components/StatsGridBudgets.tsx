import { Group, Paper, SimpleGrid, Text, Badge, Flex } from "@mantine/core";
import { IconEye, IconArrowUp, IconDotsVertical } from "@tabler/icons-react";
import classes from "../styles/StatsGridBudget.module.css";

const data = [
  { title: "Total Balance", amount: "100,635.15" },
  { title: "Last Income", amount: "+15,000" },
  { title: "Expenses", amount: "-10,000" },
] as const;

export function StatsGridBudget() {
  const stats = data.map((stat) => {
    return (
      <Paper className="w-60" withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" c="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <IconDotsVertical />
        </Group>
        <Group className="pt-8">
          <Text>{stat.amount}</Text>
          <IconEye />
          <Badge leftSection={<IconArrowUp size={12} />}>10%</Badge>
        </Group>
      </Paper>
    );
  });
  return (
    <div className={classes.root}>
      <Flex wrap={"wrap"} align={"center"} gap={"md"}>
        {stats}
      </Flex>
      {/* <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }}>{stats}</SimpleGrid> */}
    </div>
  );
}
