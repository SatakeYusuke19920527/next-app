import type { NextPage } from 'next';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const Footer: NextPage = () => {
  return (
    <footer className="h-1/8 w-screen px-8 py-2 box-border border-t flex items-center justify-center">
      <ul className="flex text-black">
        <li className="w-20">
          <Link href="/">Home</Link>
        </li>
        <li className="w-20">
          <Link href="/blog-page">Blog</Link>
        </li>
        <li className="w-20">
          <Link href="/contact-page">ContactPage</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
