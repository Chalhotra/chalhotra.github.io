import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - {siteTitle}</title>
        <meta
          name="description"
          content="Learn more about me and my interests"
        />
      </Head>

      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>About Me</h1>
        <p>
          Welcome to my about page! This is where I'll share more about myself.
        </p>
      </section>
    </Layout>
  );
}
