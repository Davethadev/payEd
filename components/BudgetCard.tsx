import { Badge, Paper, Stack, Text } from "@mantine/core";

type props = {
  detail: {
    title: string;
    amount: string;
    percentage: string;
  };
};

function BudgetCard({ detail }: props) {
  const { title, amount, percentage } = detail;
  return (
    <Paper className="w-44 hover:cursor-pointer" withBorder p="md" radius="md">
      <Stack>
        <Text className="text-[14px]">{title}</Text>
        <Text className="text-[20px] font-[600]">{amount}</Text>
        <Badge>{percentage}</Badge>
      </Stack>
    </Paper>
  );
}

export default BudgetCard;
