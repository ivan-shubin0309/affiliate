import Head from "next/head";

import { Billings } from "../../components/affiliates/billing/Billings";
import type { MyPage } from "../../components/common/types";
const Page: MyPage = () => {
  return (
    <>
      <Head>
        <title>Billing</title>
        <meta name="description" content="Billing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Billings />
    </>
  );
};

export default Page;
Page.Layout = "Affiliates";
