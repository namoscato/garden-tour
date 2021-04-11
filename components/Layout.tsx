import { useAbsoluteUrl } from "hooks/useAbsoluteUrl";
import { useSiteTitle } from "hooks/useSiteTitle";
import Head from "next/head";
import Link from "next/link";
import classes from "./Layout.module.scss";
import Logo from "./Logo";
import NavigationLink from "./NavigationLink";

export const DESCRIPTION =
  "An annual celebration of color that showcases the hard work and dedication of local gardeners in the Village of Kenmore and Town of Tonawanda.";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: Props) {
  const imageUrl = useAbsoluteUrl("/images/og-16x9.jpg");
  const siteTitle = useSiteTitle(title);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{siteTitle}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Ken-Ton Garden Tour logo" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#002385" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={classes.root}>
        <div className={classes.image}></div>
        <header className={classes.header}>
          <Link href="/">
            <a className={classes.logo} title="Home">
              <Logo />
            </a>
          </Link>
          <div>
            <nav className={classes.nav}>
              <NavigationLink href="/register">Register</NavigationLink>
              <NavigationLink href="/about">About</NavigationLink>
            </nav>
            {!!title && <h1 className={classes.title}>{title}</h1>}
          </div>
        </header>
        <main className={classes.main}>{children}</main>
        <footer className={classes.footer}>
          &copy; {new Date().getFullYear()} Ken-Ton Garden Tour.
        </footer>
      </div>
    </>
  );
}
