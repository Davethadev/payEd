import {
  Avatar,
  Flex,
  Group,
  Text,
  TextInput,
  UnstyledButton,
  Button,
  rem,
  Paper,
} from "@mantine/core";
import { IconBell, IconChevronRight, IconSearch } from "@tabler/icons-react";
import userClasses from "../styles/UserButton.module.css";
import React from "react";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle";

function Topnav() {
  return (
    <Paper className="sticky top-0 z-20">
      <Flex align={"center"} justify={"space-between"} className="px-6 ">
        {/* <TextInput leftSection={<IconSearch />} placeholder="Search" /> */}
        <Flex align={"center"} className="gap-4" justify={"space-between"}>
          <Text className="text-xl font-medium mr-4">
            University of Nigeria Nsukka
          </Text>
          <Button variant="default">
            <IconBell />
          </Button>
          <ColorSchemeToggle />
        </Flex>
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
          </Group>
        </UnstyledButton>
      </Flex>
      <hr />
    </Paper>
  );
}

export default Topnav;
