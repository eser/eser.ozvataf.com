import Link from "next/link";
import { NextSeo } from "next-seo";
import { Header } from "semantic-ui-react";
import { type CustomPage } from "@webclient/pages/_app.types";
import { type Language, languages, useI18N } from "@webclient/shared/i18n";
import { allStories, Story } from "@contentlayer/generated";
import styles from "./page.module.css";

const getStaticPaths = async function getStaticPaths() {
  const paths = languages.map((language) => `/${language.code}/stories`);

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async function getStaticProps({ params }) {
  const stories: Story[] = allStories.filter((story) =>
    story.lang === params.language
  ).sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return { props: { stories } };
};

interface StoryCardProps {
  lang: Language;
  story: Story;
}

const StoryCard = function StoryCard(props: StoryCardProps) {
  const { formatDate } = useI18N(props.lang.code);

  const date = formatDate(new Date(props.story.date));

  return (
    <div className={styles.story}>
      <h3>
        <Link href={props.story.url}>
          <a>{props.story.title}</a>
        </Link>
      </h3>
      <time dateTime={date}>
        {date}
      </time>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: props.story.body.html }}
      />
    </div>
  );
};

interface StoriesPageProps {
  lang: Language;
  stories: Story[];
}

const StoriesPage: CustomPage = function StoriesPage(props: StoriesPageProps) {
  const { t } = useI18N(props.lang.code);

  return (
    <>
      <NextSeo title={t("Stories")} />

      <section className={styles.section}>
        <Header as="h1">{t("Stories")}</Header>

        <div className={styles.stories}>
          {props.stories.map((story, idx) => (
            <StoryCard
              key={idx}
              lang={props.lang}
              story={story}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export {
  getStaticPaths,
  getStaticProps,
  StoriesPage,
  StoriesPage as default,
  StoryCard,
};
