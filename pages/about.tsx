import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>about page</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default About;
