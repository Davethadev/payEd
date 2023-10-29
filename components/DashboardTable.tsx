import cx from "clsx";
import { useState } from "react";
import { Table } from "@mantine/core";
import classes from "../styles/TableScrollArea.module.css";

const data = [
  {
    transaction: "Transfer to Miles Brown",
    title: "012A5Y78",
    amount: "$300.00",
    date: "June 29th 2023",
    status: "Fiat",
  },
  {
    transaction: "Transfer to Miles Brown",
    title: "012A5Y78",
    amount: "$300.00",
    date: "June 29th 2023",
    status: "Fiat",
  },
  {
    transaction: "Transfer to Miles Brown",
    title: "012A5Y78",
    amount: "$300.00",
    date: "June 29th 2023",
    status: "Fiat",
  },
  {
    transaction: "Transfer to Miles Brown",
    title: "012A5Y78",
    amount: "$300.00",
    date: "June 29th 2023",
    status: "Fiat",
  },
  {
    transaction: "Transfer to Miles Brown",
    title: "012A5Y78",
    amount: "$300.00",
    date: "June 29th 2023",
    status: "Fiat",
  },
  {
    transaction: "Transfer to Miles Brown",
    title: "012A5Y78",
    amount: "$300.00",
    date: "June 29th 2023",
    status: "Fiat",
  },
  {
    transaction: "Transfer to Miles Brown",
    title: "012A5Y78",
    amount: "$300.00",
    date: "June 29th 2023",
    status: "Fiat",
  },
  {
    transaction: "Transfer to Miles Brown",
    title: "012A5Y78",
    amount: "$300.00",
    date: "June 29th 2023",
    status: "Fiat",
  },
];

export function DashboardTable() {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row, index) => (
    <Table.Tr
      key={index}
      className="border-1 border-gray-200 h-14 items-center rounded-md grid grid-cols-5"
    >
      <Table.Td>{row.transaction}</Table.Td>
      <Table.Td>{row.title}</Table.Td>
      <Table.Td>{row.amount}</Table.Td>
      <Table.Td>{row.date}</Table.Td>
      <Table.Td>{row.status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table className=" w-full" miw={700}>
      <Table.Thead
        className={cx(classes.header, { [classes.scrolled]: scrolled })}
      >
        <Table.Tr className="grid grid-cols-5">
          <Table.Th>Transaction</Table.Th>
          <Table.Th>Title</Table.Th>
          <Table.Th>Amount</Table.Th>
          <Table.Th>Date</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody className="space-y-3 mt-3 flex flex-col w-full">
        {rows}
      </Table.Tbody>
    </Table>
  );
}
