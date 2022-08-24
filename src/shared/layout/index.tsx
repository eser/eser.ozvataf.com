import React, { type ReactNode } from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { type CustomAppProps } from "@webclient/pages/_app.types";

import styles from "./index.module.css";

interface LayoutProps {
  lang: string;
  appProps: CustomAppProps;
  children: ReactNode;
}

const Layout = function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Header lang={props.lang} />
      <main className={styles["page-content"]}>
        {props.children}
      </main>
      <Footer lang={props.lang} />
    </>
  );
};

export { Layout, Layout as default };
