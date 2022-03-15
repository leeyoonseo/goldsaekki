import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "./layout/base";
import Head from "next/head";
import Apps from "@/components/template/Apps/apps";

const Wrap = styled.div`
  width: 100%;
  padding: 24px 2%;
  box-sizing: border-box;
  height: 100%;
`;

const IndexPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(false);

  useEffect(() => {
    console.log("useEffect", user);

    // TODO: Store 작업: user 정보가 없을때
    if (!user) {
      alert("첫 방문이시군요!\n정보를 입력해주세요!");
      router.replace("/init");
    }
  });

  return (
    <Wrap>
      <Apps />
    </Wrap>
  );
};

IndexPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <>
      <Head>
        <title>OKAYOON | HOME</title>
      </Head>

      <Layout>{page}</Layout>
    </>
  );
};

export default IndexPage;
