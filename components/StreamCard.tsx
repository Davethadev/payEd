import { Button, Paper, Stack, Text, Box, SimpleGrid } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

type props = {
  detail: any;
};

function StreamCard({ detail }: props) {
  // const { title, amount } = detail;
  return (
    <Paper withBorder className="border-2 relative h-40 hover:cursor-pointer">
      <Box p="md">
        <Text className="font-medium">{detail.name}</Text>
        <Text className="!text-3xl mt-4 font-medium">{detail.amount}</Text>
      </Box>
      <Button
        variant="default"
        className="absolute h-[3.2rem] text-[1rem] w-full bottom-0"
        rightSection={<IconArrowRight size={14} />}
      >
        Check details
      </Button>
    </Paper>
  );
}

export default StreamCard;
