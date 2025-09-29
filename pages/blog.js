import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog - {siteTitle}</title>
        <meta
          name="description"
          content="Read my latest blog posts and thoughts"
        />
      </Head>

      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>Blog</h1>
        <p>Here are all my blog posts and articles.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link
                href={`/posts/${id}`}
                className={utilStyles.headingSm}
                style={{ fontSize: "1.125rem", fontWeight: 500 }}
              >
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
