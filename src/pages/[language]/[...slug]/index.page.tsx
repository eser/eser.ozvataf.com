import { NextSeo } from "next-seo";
import { Header } from "semantic-ui-react";
import { type CustomPage } from "@webclient/pages/_app.types";
import { allStaticPages, StaticPage } from "@contentlayer/generated";
import styles from "./page.module.css";

const getStaticPaths = async function getStaticPaths() {
  const paths = allStaticPages.map((staticPage) => staticPage.url);

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async function getStaticProps({ params }) {
  const staticPage = allStaticPages.find((staticPage) =>
    staticPage.url === `/${params.language}/${params.slug}`
  );

  return {
    props: {
      staticPage,
    },
  };
};

interface StaticPageProps {
  staticPage: StaticPage;
}

const StaticPage: CustomPage = function StaticPage(props: StaticPageProps) {
  // const date = new Date(props.staticPage.date).toLocaleString("tr-TR");

  return (
    <>
      <NextSeo title={props.staticPage.title} />

      <article className={styles.article}>
        <div className={styles.page}>
          <Header as="h1">{props.staticPage.title}</Header>
          {/* <time dateTime={date}>
            {date}
          </time> */}
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: props.staticPage.body.html }}
          />
        </div>
      </article>
    </>
  );
};

export { getStaticPaths, getStaticProps, StaticPage, StaticPage as default };
