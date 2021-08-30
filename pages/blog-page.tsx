import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';

const Blog: NextPage = () => {
  return (
    <Layout title="Blog">
      <h1>Blog Page</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </Layout>
  );
};

export default Blog;
