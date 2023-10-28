import {
  Flex,
  Stack,
  TextInput,
  Text,
  Button,
  PasswordInput,
  Box,
  Image,
} from "@mantine/core";
import { useState } from "react";

export default function Signup() {
  const [newSchool, setNewSchool] = useState({
    school_name: "",
    school_email: "",
    password: "",
  });
  return (
    <main>
      <Flex align={"center"} className="pl-10">
        <div className="bg-purple-200 p-6 rounded-md w-1/3 h-[90vh]">
          <Image src={"./payed.png"} w={"full"} className="h-full" />
        </div>
        <section className="w-2/3 h-screen flex justify-center items-center">
          <form action="" className="w-[472px] mx-auto">
            <Stack gap={"xl"}>
              <Text className="text-2xl text-center text-purple-600 font-[600]">
                Pay Ed
              </Text>
              <Box className="text-center">
                <Text className="text-center text-2xl font-[600]">
                  Welcome Aboard
                </Text>
                <small className="text-gray-400">Let's get you set up</small>
              </Box>
              <TextInput
                label="Enter school name"
                placeholder="University of Nigeria, Nsukka"
                value={newSchool.school_name}
                onChange={(e) =>
                  setNewSchool({ ...newSchool, school_name: e.target.value })
                }
              />
              <Box>
                <TextInput
                  label="Enter school email"
                  value={newSchool.school_email}
                  onChange={(e) =>
                    setNewSchool({ ...newSchool, school_email: e.target.value })
                  }
                  placeholder="Damiloladeola12@gmail.com"
                />
                <small className="text-gray-400">
                  *school email should be a custom email e.g schoolemail@edu.ng
                </small>
              </Box>
              <Box>
                <PasswordInput
                  label="Set a Password"
                  value={newSchool.password}
                  onChange={(e) =>
                    setNewSchool({ ...newSchool, password: e.target.value })
                  }
                  placeholder="*********"
                />
                <small className="text-gray-400">
                  *passwords should be at least 8 characters and contain at
                  least one uppercase and one special character
                </small>
              </Box>
              <Button
                className="bg-purple-400 rounded text-white"
                color="black"
              >
                Next
              </Button>
            </Stack>
          </form>
        </section>
      </Flex>
    </main>
  );
}
