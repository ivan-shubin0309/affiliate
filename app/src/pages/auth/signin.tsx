import { Loading } from "@/components/common/Loading";
import { useAuth } from "@/hooks/useAuth";
import Head from "next/head";
import { FormSignin } from "../../components/affiliates/account/FormSignin";
import AuthenticationFooter from "../../components/common/footer/AuthenticationFooter";
import type { MyPage } from "../../components/common/types";
import AuthenticationHeader from "@/components/common/header/AuthenticationHeader";

const Page: MyPage = () => {
  const redirected = useAuth();

  if (redirected) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Affiliates create account</title>
        <meta name="description" content="Affiliates Creative Materials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center px-5">
        <div className="m-auto min-h-full items-center justify-center py-12">
          <div className="w-full max-w-xs">
            <AuthenticationHeader>
              Login to your <br />
              <span className="font-bold">Affillate</span> account
            </AuthenticationHeader>
            <FormSignin />
            <AuthenticationFooter />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
Page.Layout = "NoLayout";
