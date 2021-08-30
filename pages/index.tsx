import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <h1>Home</h1>
      <h1>Hello next.tsx</h1>
      <Link href="/about">About</Link>
    </Layout>
  );
};

export default Home;
