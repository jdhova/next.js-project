import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


// ## 1. Aayushi shah-N01523081 and

// ## 2. Jude Okagu -N01407704

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <nav className={styles.nav}>
          <h3>Home</h3>
          
        </nav>

        <main className={styles.main}>
          <h2>Food </h2>
          <h2> Drinks</h2>
          <h2>Confectionary </h2>
        </main>

        <footer className={styles.footer}>
        <h3>&copy;Copyright 2022.All Rights Reserved.</h3>
        </footer>
    </div>
  )
}