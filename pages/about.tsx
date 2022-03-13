import { ReactNode } from "react";
import Link from "next/link";
import Layout from "./layout/base";
import Head from "next/head";

const AboutPage = () => (
  <>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

AboutPage.getLayout = function getLayout(page: ReactNode) {
  <>
    <Head>
      <title>OKAYOON | ABOUT</title>
    </Head>

    <Layout>{page}</Layout>
  </>;
};

export default AboutPage;
