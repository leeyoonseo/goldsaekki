import { ReactNode } from "react";
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

const IndexPage = () => (
  <>
    <Wrap>
      <Apps />
    </Wrap>
  </>
);

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
