import { ReactNode } from 'react';
import Link from 'next/link';
import Layout from './layout/base';

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
  const title = 'GoldSaekki | About';
  return <Layout title={title}>{page}</Layout>;
};

export default AboutPage;
