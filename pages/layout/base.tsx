import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  height: calc(100vh - 64px);
  background-color: white;

  & > section {
    padding: 32px;
  }
`;

type Props = {
  children?: ReactNode;
  title?: string;
};

const base = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>BaseLayout</h1>
      {/* TODO: header */}
      <Container>{children}</Container>
      {/* TODO: footer */}
    </>
  );
};

export default base;
