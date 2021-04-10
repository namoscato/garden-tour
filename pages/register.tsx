import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";
import Layout from "components/Layout";
import { useSiteTitle } from "hooks/useSiteTitle";
import Head from "next/head";
import { useEffect, useRef } from "react";
import classes from "./Register.module.scss";

const TYPEFORM_FORM_ID = "P8UufQ7p";

export default function Register() {
  const title = useSiteTitle("Register");
  const typeformContainer = useRef<HTMLDivElement>();

  useEffect(() => {
    createWidget(TYPEFORM_FORM_ID, {
      container: typeformContainer.current,
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes.root} ref={typeformContainer} />
    </Layout>
  );
}
