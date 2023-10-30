import cx from "clsx";
import { useState } from "react";
import {
  Table,
  ScrollArea,
  Paper,
  Text,
  Button,
  Stack,
  Modal,
  Flex,
  Box,
} from "@mantine/core";
import classes from "../styles/TableScrollArea.module.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { payExpense } from "../api/expenses";
import { useRouter } from "next/router";
import { getDate, abbreviateNumber } from "../api/importantFunctions";
import { useDisclosure } from "@mantine/hooks";

const data = [
  {
    title: "Salaries",
    description: "Monthly Budget",
    amount: "2,000,000",
    due: "June 29th 2023",
    status: "Paid",
  },
  {
    title: "Salaries",
    description: "Monthly Budget",
    amount: "2,000,000",
    due: "June 29th 2023",
    status: "Paid",
  },
  {
    title: "Salaries",
    description: "Monthly Budget",
    amount: "2,000,000",
    due: "June 29th 2023",
    status: "Paid",
  },
  {
    title: "Salaries",
    description: "Monthly Budget",
    amount: "2,000,000",
    due: "June 29th 2023",
    status: "Paid",
  },
  {
    title: "Salaries",
    description: "Monthly Budget",
    amount: "2,000,000",
    due: "June 29th 2023",
    status: "Paid",
  },
  {
    title: "Salaries",
    description: "Monthly Budget",
    amount: "2,000,000",
    due: "June 29th 2023",
    status: "Paid",
  },
  {
    title: "Salaries",
    description: "Monthly Budget",
    amount: "2,000,000",
    due: "June 29th 2023",
    status: "Paid",
  },
  {
    title: "Salaries",
    description: "Monthly Budget",
    amount: "2,000,000",
    due: "June 29th 2023",
    status: "Paid",
  },
];

type Props = {
  expenses: any[] | null | undefined;
};

export function TableScrollArea({ expenses }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [payData, setPayData] = useState({
    amount: "",
    budget_id: "",
    id: "",
  });
  console.log("inside table", expenses && expenses.length);

  const payExpenseMutation = useMutation({
    mutationFn: payExpense,
    onSuccess: () => {
      setIsDone(true);
      close();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (data: {
    amount: string;
    budget_id: string;
    id: string;
  }) => {
    console.log("Paydata", data);
    setIsDone(false);
    payExpenseMutation.mutate(data);
  };

  const rows =
    expenses && expenses.length == 0 ? (
      <Text>No expenses available for this budget</Text>
    ) : (
      expenses &&
      expenses.map((row, index) => (
        <>
          <Modal opened={opened} onClose={close} centered padding={"lg"}>
            <Stack>
              <Text className="text-lg">
                <span className="font-medium text-purple-800">Title:</span>{" "}
                {row.title}
              </Text>
              <Text className="text-lg">
                <span className="font-medium text-purple-800">
                  Description:
                </span>{" "}
                {row.description}
              </Text>
              <Text className="text-lg">
                <span className="font-medium text-purple-800">Price:</span>{" "}
                {abbreviateNumber(parseInt(row.amount))}
              </Text>
              <Text className="text-lg">
                <span className="font-medium text-purple-800">Due date:</span>{" "}
                {row.due_date ? getDate(row.due_date) : "N/A"}
              </Text>

              {!row.status && (
                <Button
                  onClick={() => {
                    console.log("row", row.amount, row.budget, row.id);
                    handleSubmit({
                      amount: row.amount,
                      budget_id: row.budget as string,
                      id: row.id as string,
                    });
                  }}
                  className="bg-blue-400 text-white rounded w-fit ml-auto"
                >
                  Pay
                </Button>
              )}
            </Stack>
          </Modal>
          <Table.Tr
            key={index}
            className="border-2 border-purple-800/10 h-14 items-center rounded-md grid grid-cols-6"
          >
            <Table.Td>{row.title}</Table.Td>
            <Table.Td>{row.description}</Table.Td>
            <Table.Td>{abbreviateNumber(parseInt(row.amount))}</Table.Td>
            <Table.Td>{row.due_date ? getDate(row.due_date) : "N/A"} </Table.Td>
            <Table.Td>{row.status ? "Paid" : "Unpaid"}</Table.Td>
            <Table.Td>
              <Button onClick={open} variant="default">
                View
              </Button>
            </Table.Td>
          </Table.Tr>
        </>
      ))
    );

  return (
    <>
      <Table miw={700} className=" w-full">
        <Table.Thead
          className={cx(classes.header, { [classes.scrolled]: scrolled })}
        >
          <Table.Tr className="grid grid-cols-6 h-16 items-center">
            <Table.Th>Title</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Due date</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Pay</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody className="space-y-3 mt-3 flex flex-col w-full">
          {rows}
        </Table.Tbody>
      </Table>
    </>
  );
}
