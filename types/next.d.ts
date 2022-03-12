import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactNode } from "react";

declare module "next" {
  type GetLayout = (page: ReactNode) => ReactNode;

  // eslint-disable-next-line @typescript-eslint/ban-types
  type Page<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: GetLayout;
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  type AppLayoutProps<P = {}> = AppProps<P> & {
    Component: Page<P>;
  };
}
