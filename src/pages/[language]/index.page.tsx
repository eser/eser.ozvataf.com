import React from "react";
import { NextSeo } from "next-seo";
import { Container, Header } from "semantic-ui-react";
import { type CustomPage } from "@webclient/pages/_app.types";
import { type Language, languages } from "@webclient/shared/i18n";
import { Mapper } from "@webclient/shared/react/mapper";

import { HomePageContentEnglish } from "./index.content.en";
import { HomePageContentTurkish } from "./index.content.tr";
import styles from "./page.module.css";

const getStaticPaths = async function getStaticPaths() {
  const paths = languages.map((language) => `/${language.code}`);

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async function getStaticProps() {
  return {
    props: {},
  };
};

interface HomePageProps {
  lang: Language;
}

const homePageContentMapping = {
  en: HomePageContentEnglish,
  tr: HomePageContentTurkish,
};

const HomePage: CustomPage = function HomePage(props: HomePageProps) {
  return (
    <>
      <NextSeo />

      <Container>
        {/* <Responsive minWidth={Responsive.onlyComputer.minWidth}> */}
        <Header as="h1" className={styles["home-header"]}>Eser Ozvataf</Header>
        {/* </Responsive> */}

        <Mapper
          map={homePageContentMapping}
          value={props.lang.code}
          props={props}
        />
      </Container>
    </>
  );
};

export { getStaticPaths, getStaticProps, HomePage, HomePage as default };
