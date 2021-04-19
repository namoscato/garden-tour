import "@typeform/embed/build/css/widget.css";
import Content from "components/Content";
import Layout from "components/Layout";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout title="Page Not Found">
      <Content>
        <p>Sorry, the page could not be found.</p>
        <Link href="/">
          <a className="button">Return Home</a>
        </Link>
      </Content>
    </Layout>
  );
}
