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

IndexPage.getLayout = function getLayout(page) {
  return <Layout title="Home | Next.js + TypeScript Example">{page}</Layout>;
};

export default IndexPage;
