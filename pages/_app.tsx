import * as gtag from "lib/gtag";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "node_modules/normalize.css/normalize.css";
import { useEffect } from "react";
import "styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
