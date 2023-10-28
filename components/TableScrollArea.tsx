import cx from "clsx";
import { useState } from "react";
import { Table, ScrollArea, Paper } from "@mantine/core";
import classes from "../styles/TableScrollArea.module.css";

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

export function TableScrollArea() {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>{row.title}</Table.Td>
      <Table.Td>{row.description}</Table.Td>
      <Table.Td>{row.amount}</Table.Td>
      <Table.Td>{row.due}</Table.Td>
      <Table.Td>{row.status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table miw={700}>
      <Table.Thead
        className={cx(classes.header, { [classes.scrolled]: scrolled })}
      >
        <Table.Tr>
          <Table.Th>Title</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Amount</Table.Th>
          <Table.Th>Due date</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
