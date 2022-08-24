import Link from "next/link";
import { NextSeo } from "next-seo";
import { Header } from "semantic-ui-react";
import { type CustomPage } from "@webclient/pages/_app.types";
import { languages } from "@webclient/shared/i18n";
import { allStories, Story } from "@contentlayer/generated";
import styles from "./page.module.css";

const getStaticPaths = async function getStaticPaths() {
  const paths = languages.map((language) => `/${language}/stories`);

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

const StoryCard = function StoryCard(story: Story) {
  const date = new Date(story.date).toLocaleString("tr-TR");

  return (
    <div className={styles.story}>
      <h3>
        <Link href={story.url}>
          <a>{story.title}</a>
        </Link>
      </h3>
      <time dateTime={date}>
        {date}
      </time>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: story.body.html }}
      />
    </div>
  );
};

interface StoriesPageProps {
  stories: Story[];
}

const StoriesPage: CustomPage = function StoriesPage(props: StoriesPageProps) {
  return (
    <>
      <NextSeo title="Stories" />

      <section className={styles.section}>
        <Header as="h1">Stories</Header>

        <div className={styles.stories}>
          {props.stories.map((story, idx) => (
            <StoryCard
              key={idx}
              {...story}
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
