import { Badge, Paper, Stack, Text } from "@mantine/core";

type props = {
  detail: any;
};

function BudgetCard({ detail }: props) {
  // const { budget_name, amount } = detail;
  return (
    <Paper className=" hover:cursor-pointer" withBorder p="md" radius="md">
      <Stack>
        <Text className="text-[14px]">{detail.name}</Text>
        <Text className="text-xl font-[600]">
          {parseInt(detail.balance).toLocaleString()}
        </Text>
        <Badge>{30}</Badge>
      </Stack>
    </Paper>
  );
}

export default BudgetCard;
