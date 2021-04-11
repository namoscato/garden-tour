import "@typeform/embed/build/css/widget.css";
import Content from "components/Content";
import Layout from "components/Layout";
import { useSiteTitle } from "hooks/useSiteTitle";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  const title = useSiteTitle("Page Not Found");

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Content>
        <p>Sorry, the page could not be found.</p>
        <Link href="/">
          <a className="button">Return Home</a>
        </Link>
      </Content>
    </Layout>
  );
}
