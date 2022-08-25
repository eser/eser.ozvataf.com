import { NextSeo } from "next-seo";
import { Header } from "semantic-ui-react";
import { type CustomPage } from "@webclient/pages/_app.types";
import { type Language, useI18N } from "@webclient/shared/i18n";
import { allStories, Story } from "@contentlayer/generated";
import styles from "./page.module.css";

const getStaticPaths = async function getStaticPaths() {
  const paths = allStories.map((story) => story.url);

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async function getStaticProps({ params }) {
  const story = allStories.find((story) =>
    story.url === `/${params.language}/stories/${params.slug}`
  );

  return {
    props: {
      story,
    },
  };
};

interface StoryPageProps {
  lang: Language;
  story: Story;
}

const StoryPage: CustomPage = function Story(props: StoryPageProps) {
  const { t, formatDate } = useI18N(props.lang.code);

  const date = formatDate(new Date(props.story.date));

  return (
    <>
      <NextSeo title={`${t("Stories")} - ${props.story.title}`} />

      <article className={styles.article}>
        <div className={styles.story}>
          <Header as="h1">{props.story.title}</Header>
          <time dateTime={date}>
            {date}
          </time>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: props.story.body.html }}
          />
        </div>
      </article>
    </>
  );
};

export { getStaticPaths, getStaticProps, StoryPage, StoryPage as default };
