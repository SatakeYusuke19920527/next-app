import type { NextPage } from 'next';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';

const About: NextPage = () => {
  return (
    <Layout title="about">
      <h1>about page</h1>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default About;
