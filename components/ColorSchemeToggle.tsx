import { Button, Box, useMantineColorScheme } from "@mantine/core";
import { useState } from "react";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const [dark, setDark] = useState(true);

  const updateTheme = () => {
    setDark((prev) => !prev);
    dark ? setColorScheme("dark") : setColorScheme("light");
  };

  return (
    <Box>
      {dark ? (
        <Button onClick={updateTheme} variant="default">
          <IconMoon />
        </Button>
      ) : (
        <Button variant="default" className="py-2" onClick={updateTheme}>
          <IconSunHigh />
        </Button>
      )}
      {/* <Button variant="default" onClick={() => setColorScheme("auto")}>
        Auto
      </Button> */}
    </Box>
  );
}
