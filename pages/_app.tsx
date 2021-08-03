// import "../styles/globals.css";
// TODO: in producion, replace line 3 with the commented line 1 and comment line 3
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
