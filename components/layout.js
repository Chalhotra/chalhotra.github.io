import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import ThemeToggle from "./ThemeToggle";

const name = "chetak";
export const siteTitle = "Next.js Sample Website";

const Logo = ({ home }) => (
  <div className={utilStyles.logoLg}>
    <Latex>$\Omega$</Latex>
  </div>
);

const Navigation = () => (
  <nav className={styles.nav}>
    <Link href="/" className={styles.navLink}>
      Home
    </Link>
    <div className={styles.separator} />
    <Link href="/about" className={styles.navLink}>
      About
    </Link>
    <div className={styles.separator} />
    <Link href="/blog" className={styles.navLink}>
      Blog
    </Link>
  </nav>
);

const HeaderContent = ({ home }) => (
  <div className={styles.textBlock} style={{ marginBottom: "-1.2rem" }}>
    <h2 className={utilStyles.headingLg}>
      <Link href="/" className={utilStyles.colorInherit}>
        {name}
      </Link>
    </h2>

    <Navigation />
  </div>
);

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Logo home={home} />
          <HeaderContent home={home} />
        </div>
        <ThemeToggle />
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
