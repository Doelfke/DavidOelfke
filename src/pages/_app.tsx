import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import RootLayout from "../components/layout";
import { PagesProgressBar } from "next-nprogress-bar";
import "dotenv/config";

import "./globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <RootLayout>
        {page}
        <PagesProgressBar
          height="2px"
          color="#9333ea"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </RootLayout>
    ));

  return getLayout(<Component {...pageProps} />);
}
