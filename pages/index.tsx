import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}

export default Home
