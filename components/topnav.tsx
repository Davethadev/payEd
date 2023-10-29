import {
  Avatar,
  Flex,
  Group,
  Text,
  TextInput,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { IconBell, IconChevronRight, IconSearch } from "@tabler/icons-react";
import userClasses from "../styles/UserButton.module.css";
import React from "react";

function Topnav() {
  return (
    <Flex align={"center"} justify={"space-between"}>
      <TextInput leftSection={<IconSearch />} placeholder="Search" />
      <Text>University of Nigeria Nsukka</Text>
      <IconBell />
      <UnstyledButton className={userClasses.user}>
        <Group>
          <Avatar
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            radius="xl"
          />

          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              Harriette Spoonlicker
            </Text>

            <Text c="dimmed" size="xs">
              hspoonlicker@outlook.com
            </Text>
          </div>

          <IconChevronRight
            style={{ width: rem(14), height: rem(14) }}
            stroke={1.5}
          />
        </Group>
      </UnstyledButton>
    </Flex>
  );
}

export default Topnav;
