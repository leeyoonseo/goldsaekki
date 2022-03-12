import { ReactNode } from 'react';
import type { GetLayout, AppLayoutProps } from 'next';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};
const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => page;

const App = ({ Component, pageProps }: AppLayoutProps): JSX.Element => {
  // const getLayout: GetLayout = (page: ReactNode): ReactNode => page;
  const getLayout = Component.getLayout ?? defaultGetLayout;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};

export default App;
