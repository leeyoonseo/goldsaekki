import { ReactNode } from "react";
import type { GetLayout, AppLayoutProps } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/global";
import theme from "@/styles/theme";

const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => page;

const App = ({ Component, pageProps }: AppLayoutProps): JSX.Element => {
  const getLayout = Component.getLayout ?? defaultGetLayout;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-euqiv="x-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Robot" content="all" />
        <meta name="author" content="Okayoon.lee" />
        <meta
          name="description"
          content="Front-end Web Developer Portfolio Site: react, redux"
        />
        {/* <link
        rel="shortcut icon"
        href={`${bucketUrl}/favicon.ico`}
        type="image/x-icon"
      /> */}
        <meta property="og:image" content="../public/icon_logo.png" />
        <meta
          property="og:description"
          content="Front-end Web Developer Portfolio Site: react, redux"
        />
        <meta property="og:title" content="Okayoon" />
        <title>OKAYOON</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};

export default App;
