import { useAbsoluteUrl } from "hooks/useAbsoluteUrl";
import { viewPage } from "lib/gtag";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import { useRouter } from "next/router";
import "normalize.css/normalize.css";
import { useEffect } from "react";
import "styles/globals.scss";

const nunito = Nunito({ subsets: ["latin"] });

export const TITLE = "Ken-Ton Garden Tour";
export const DESCRIPTION =
  "An annual celebration of color that showcases the hard work and dedication of local gardeners in the Village of Kenmore and Town of Tonawanda.";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = useAbsoluteUrl(router.pathname);
  const imageUrl = useAbsoluteUrl("/images/og-16x9.jpg");

  useEffect(() => {
    router.events.on("routeChangeComplete", viewPage);

    return () => {
      router.events.off("routeChangeComplete", viewPage);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s – ${TITLE}`}
        defaultTitle={TITLE}
        description={DESCRIPTION}
        canonical={url}
        openGraph={{
          type: "website",
          description: DESCRIPTION,
          url,
          images: [
            {
              url: imageUrl,
              width: 1920,
              height: 1080,
              alt: `${TITLE} logo`,
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
          {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#002385",
          },
        ]}
        additionalMetaTags={[
          {
            name: "msapplication-TileColor",
            content: "#2d89ef",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
      />
      <style jsx global>{`
        body {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
