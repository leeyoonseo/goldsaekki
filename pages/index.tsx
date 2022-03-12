import { ReactNode } from 'react';
import Link from 'next/link';
import Layout from './layout/base';

const IndexPage = () => (
  <>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </>
);

IndexPage.getLayout = function getLayout(page: ReactNode) {
  const title = 'GoldSaekki | 메인';
  return <Layout title={title}>{page}</Layout>;
};

export default IndexPage;
