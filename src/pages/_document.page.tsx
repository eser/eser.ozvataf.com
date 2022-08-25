import { Head, Html, Main, NextScript } from "next/document";

const CustomDocument = function CustomDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export { CustomDocument, CustomDocument as default };
