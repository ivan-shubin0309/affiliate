import Head from "next/head";

import Announcements from "../../components/affiliates/announce/announcements";
import type { MyPage } from "../../components/common/types";
import { i18nGetServerSideProps } from "@/utils/i18n-ssr";

export const getServerSideProps = i18nGetServerSideProps(["affiliate"]);

const Page: MyPage = () => {
  return (
    <>
      <Head>
        <title>Announcements</title>
        <meta name="description" content="Privacy" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Announcements />
    </>
  );
};

export default Page;

Page.Layout = "Affiliates";
