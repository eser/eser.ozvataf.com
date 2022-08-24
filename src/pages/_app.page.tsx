import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import { type CustomAppProps } from "./_app.types";
import { Layout } from "@webclient/shared/layout/index";
import { defaults } from "@webclient/shared/defaults";
import { getLanguage } from "@webclient/shared/i18n";
import "@webclient/shared/globals.css";

config.autoAddCss = false;

const CustomApp = function CustomApp(appProps: CustomAppProps) {
  const router = useRouter();

  const language = getLanguage(router.query.language);

  if (language === undefined) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Layout lang={language} appProps={appProps}>
        <DefaultSeo
          titleTemplate={`${defaults.siteName} - %s`}
          defaultTitle={defaults.siteName}
          openGraph={{
            type: "website",
            locale: defaults.locale,
            url: defaults.webSiteUrl,
            site_name: defaults.siteName,
          }}
          twitter={{
            // handle: defaults.creatorTwitterHandle,
            site: defaults.twitterHandle,
            cardType: "summary_large_image",
          }}
        />
        <appProps.Component lang={language} {...appProps.pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export { CustomApp, CustomApp as default };
