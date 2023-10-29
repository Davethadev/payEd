import Head from "next/head";
import {
  ScrollArea,
  Text,
  Group,
  Flex,
  TextInput,
  UnstyledButton,
  Avatar,
  rem,
} from "@mantine/core";
import {
  IconList,
  IconCurrencyEthereum,
  IconCpu,
  IconBell,
  IconDna2,
  IconSettings,
  IconUserCircle,
  IconPhoneOutgoing,
  IconDiamond,
  IconLogout,
  IconSearch,
  IconChevronRight,
} from "@tabler/icons-react";
import { LinksGroup } from "./LinksGroup";
import classes from "../styles/NavbarNested.module.css";
import Topnav from "./topnav";
import Link from "next/link";

const mockdata = [
  { label: "Dashboard", link: "/", icon: IconList },
  { label: "Budgets", link: "/budgets", icon: IconCurrencyEthereum },
  { label: "Marketplace", link: "/marketplace", icon: IconDiamond },
  {
    label: "Transactions",
    icon: IconCpu,
    // initiallyOpened: true,
    links: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
  {
    label: "Notifications",
    icon: IconBell,
    links: [
      { label: "Overview", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Streams", icon: IconDna2, link: "/streams" },

  {
    label: "Settings",
    icon: IconSettings,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
  { label: "Profile", icon: IconUserCircle },
  {
    label: "Call center",
    icon: IconPhoneOutgoing,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <meta property="" content={``} />
        <meta name="" content={""} />
        <meta name="" content="" />
      </Head>
      <main className="flex h-[100vh] max-h-[100vh] overflow-hidden">
        <nav className={`${classes.navbar} h-[100vh] max-h-[100vh]`}>
          <div className={classes.header}>
            <Text className="">Pay Ed</Text>
          </div>
          <Text className="py-4">Menu</Text>
          <ScrollArea className={classes.links}>
            <div
              style={{ fontWeight: "lighter" }}
              className={`${classes.linksInner}`}
            >
              {links}
              <Link href={"/"}>
                <Group className="mt-24 px-4">
                  <IconLogout />
                  <span className="text-sm font-[500]">Logout</span>
                </Group>
              </Link>
            </div>
          </ScrollArea>
        </nav>
        <section className="w-full overflow-y-auto">
          <Topnav />
          <div>{children}</div>
        </section>
      </main>
    </>
  );
}
