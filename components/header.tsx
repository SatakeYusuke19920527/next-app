import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

type PropsType = {
  title: string;
};

const Header: NextPage<PropsType> = ({ title }) => {
  return (
    <header className="h-12 flex items-center w-full bg-gray-800 px-8 py-2 box-border">
      <Head>
        <title>{title}</title>
      </Head>
      <ul className="flex space-x-4 text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog-page">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact-page">ContactPage</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
