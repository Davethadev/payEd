import { Stack, Select, Button, Group, Text } from "@mantine/core";
import {} from "@tabler/icons-react";
import { useState } from "react";

export default function SchoolInfo() {
  const [schoolType, setSchoolType] = useState("");
  const [position, setPosition] = useState("");
  const [noOfStaff, setNoOfStaff] = useState("");
  const [location, setLocation] = useState("");
  return (
    <main className="h-screen flex justify-center items-center">
      <Stack gap={"xl"} className="w-[440px] mx-auto">
        <Text className="text-2xl text-center">Pay Ed</Text>
        <Text className="text-3xl font-[600] text-center">
          School Information
        </Text>
        <small className="text-center w-[80%] mx-auto">
          We recommend using your school email - it makes sure your account
          matches the school domain
        </small>
        <form action="" className="w-full">
          <Stack gap={"xl"}>
            <Group justify="space-between">
              <Select
                label="Type of School"
                placeholder="Public"
                data={["Public", "Private"]}
                value={schoolType}
                onChange={setSchoolType}
              />
              <Select
                label="Your position in the school"
                placeholder="Administrator"
                data={["Administrator", "Dean", "Founder", "Counsellor"]}
                value={position}
                onChange={setPosition}
              />
            </Group>
            <Group justify="space-between">
              <Select
                label="No of staff"
                placeholder="100-200 persons"
                data={["100-200 persons", "200 persons and above"]}
                value={noOfStaff}
                onChange={setNoOfStaff}
              />
              <Select
                label="Where is the school located"
                placeholder="Lagos, Nigeria"
                data={["Lagos, Nigeria"]}
                value={location}
                onChange={setLocation}
              />
            </Group>
            <Button className="bg-purple-400 rounded text-white">
              Continue
            </Button>
          </Stack>
        </form>
      </Stack>
    </main>
  );
}
