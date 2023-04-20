import { Box, Button, Link, Stack, Text } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import NextLink from "next/link";
import type { MyPage } from "../components/common/types";

const Home: MyPage = () => {
  const { data: session } = useSession();

  const links = [
    { href: "/auth/signup", title: "Auth -> Sign Up" },
    { href: "/auth/signin", title: "Auth -> Sign In" },
    { href: "/auth/terms", title: "Auth -> Terms" },
    { href: "/auth/registersuccess", title: "Auth -> Register Success" },

    { href: "/auth/lost-password", title: "Auth -> Lost Password" },
    { href: "/affiliates/dashboard", title: "Dashboard" },
    { href: "/affiliates/creative", title: "Creative Materials" },
    { href: "/affiliates/sub", title: "Sub Affiliate Creative Materials" },
    { href: "/affiliates/account", title: "Account Details" },
    {
      href: "/affiliates/account-payment",
      title: "Account Payment Details",
    },
    { href: "/affiliates/profiles", title: "Profiles" },
    { href: "/affiliates/billings", title: "Billing" },
    { href: "/affiliates/tickets", title: "Tickets" },
    { href: "/affiliates/documents", title: "Documents" },
    { href: "/affiliates/commissions", title: "Commission Structure" },
    { href: "/affiliates/pixel-monitor", title: "Pixel Monitor" },
    {
      href: "/affiliates/reports/quick-summary",
      title: "Reports -> Quick Summary",
    },
    {
      href: "/affiliates/reports/commission-report",
      title: "Reports -> Commission Report",
    },
    {
      href: "/affiliates/reports/clicks-report",
      title: "Reports -> Clicks Report",
    },
    {
      href: "/affiliates/reports/install-reports",
      title: "Reports -> Installs Report",
    },
    {
      href: "/affiliates/reports/creative-report",
      title: "Reports -> Creative Report",
    },
    {
      href: "/affiliates/reports/landing-page",
      title: "Reports -> Landing Page Report",
    },
    {
      href: "/affiliates/reports/trader-report",
      title: "Reports -> Trader Report",
    },
    {
      href: "/affiliates/reports/pixel-log-report",
      title: "Reports -> pixels Logs Report",
    },
    {
      href: "/affiliates/reports/profile-report",
      title: "Reports -> Profile Report",
    },
    {
      href: "/affiliates/reports/sub-affiliate-report",
      title: "Reports -> Sub Affiliate Report",
    },
  ];

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack gap={2} m={12}>
          {!session?.user && <p>Not login</p>}
          {!!session?.user && (
            <Box>
              <p>Welcome {session.user.name}</p>
              <Button
                onClick={() => {
                  void signOut();
                }}
              >
                Logout
              </Button>
            </Box>
          )}
          {links.map(({ href, title }) => (
            <Link key={href} as={NextLink} href={href}>
              <Text as="b">{title}</Text>
            </Link>
          ))}
        </Stack>
      </main>
    </>
  );
};

export default Home;

Home.Layout = "NoLayout";
