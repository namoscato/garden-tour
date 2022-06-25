import { NextSeo } from "next-seo";
import Link from "next/link";
import { TITLE } from "pages/_app";
import classes from "./Layout.module.scss";
import Logo from "./Logo";
import NavigationLink from "./NavigationLink";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      <NextSeo title={title} />
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
              <NavigationLink href="/">Home</NavigationLink>
              <NavigationLink href="/guide">Guide</NavigationLink>
              <NavigationLink href="/about">About</NavigationLink>
            </nav>
            {!!title && <h1 className={classes.title}>{title}</h1>}
          </div>
        </header>
        <main className={classes.main}>{children}</main>
        <footer className={classes.footer}>
          &copy; {new Date().getFullYear()} {TITLE}.
        </footer>
      </div>
    </>
  );
}
