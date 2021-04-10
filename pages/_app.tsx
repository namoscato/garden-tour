import { AppProps } from "next/app";
import "node_modules/normalize.css/normalize.css";
import "styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
