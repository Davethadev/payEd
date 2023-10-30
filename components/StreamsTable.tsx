import cx from "clsx";
import { useState } from "react";
import { Box, Paper, Table } from "@mantine/core";
import classes from "../styles/TableScrollArea.module.css";
import { useQuery } from "@tanstack/react-query";
import { getStreams } from "../api/streams";
import { getDate } from "../api/importantFunctions";

const data = [
  {
    title: "Government grant",
    description: "Quarterly grant",
    amount: "2,000,000",
    due: "June 29th 2023",
  },
  {
    title: "Government grant",
    description: "Quarterly grant",
    amount: "2,000,000",
    due: "June 29th 2023",
  },
  {
    title: "Government grant",
    description: "Quarterly grant",
    amount: "2,000,000",
    due: "June 29th 2023",
  },
  {
    title: "Government grant",
    description: "Quarterly grant",
    amount: "2,000,000",
    due: "June 29th 2023",
  },
  {
    title: "Government grant",
    description: "Quarterly grant",
    amount: "2,000,000",
    due: "June 29th 2023",
  },
  {
    title: "Government grant",
    description: "Quarterly grant",
    amount: "2,000,000",
    due: "June 29th 2023",
  },
  {
    title: "Government grant",
    description: "Quarterly grant",
    amount: "2,000,000",
    due: "June 29th 2023",
  },
  {
    title: "Government grant",
    description: "Quarterly grant",
    amount: "2,000,000",
    due: "June 29th 2023",
  },
];

type Props = {
  incomes: any;
};

export function StreamsTable({ incomes }: Props) {
  const [scrolled, setScrolled] = useState(false);

  const {
    data: Streams,
    isLoading: loadingStreams,
    error,
  } = useQuery({
    queryKey: ["streams"],
    queryFn: getStreams,
  });
  console.log("in streams list", Streams, error);

  const getStreamName = (id: string) => {
    let value =
      Streams &&
      Streams.data &&
      Streams.data.filter((stream) => stream.id == id)[0];
    console.log("stream name", value);
    return value && value.name;
  };

  const rows =
    incomes &&
    incomes.data &&
    incomes.data.map((row: any, index: number) => (
      <Table.Tr
        key={index}
        className="border-2 border-purple-800/10 h-14 items-center rounded-md grid grid-cols-4"
      >
        <Table.Td>{getStreamName(JSON.stringify(row.stream))}</Table.Td>
        <Table.Td>{row.description}</Table.Td>
        <Table.Td>{parseInt(row.amount).toLocaleString()}</Table.Td>
        <Table.Td>{getDate(row.created_at)}</Table.Td>
      </Table.Tr>
    ));

  return (
    <Box className="overflow-x-auto overflow-y-hidden">
      <Table className=" w-full" miw={700}>
        <Table.Thead
          className={cx(classes.header, { [classes.scrolled]: scrolled })}
        >
          <Table.Tr className="grid grid-cols-4 h-16 items-center">
            <Table.Th>Title</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Date</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody className="space-y-3 mt-3 flex flex-col w-full">
          {rows}
        </Table.Tbody>
      </Table>
    </Box>
  );
}
