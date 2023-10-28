import { Button, Paper, Stack, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

type props = {
  detail: {
    title: string;
    amount: string;
  };
};

function StreamCard({ detail }: props) {
  const { title, amount } = detail;
  return (
    <Paper
      className="w-60 h-48 hover:cursor-pointer"
      withBorder
      p="md"
      radius="md"
    >
      <Stack>
        <Text className="text-[14px]">{title}</Text>
        <Text className="text-[20px] font-[600]">{amount}</Text>
        <Button variant="default" rightSection={<IconArrowRight size={14} />}>
          Check details
        </Button>
      </Stack>
    </Paper>
  );
}

export default StreamCard;
