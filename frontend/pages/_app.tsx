// import "../styles/globals.css";
// TODO: in producion, replace line 3 with the commented line 1 and comment line 3
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#374151" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
