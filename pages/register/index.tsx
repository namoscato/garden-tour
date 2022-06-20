import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";
import { YEAR } from "components/Dates/constants";
import Layout from "components/Layout";
import { useEffect, useRef } from "react";
import classes from "./Register.module.scss";

const REGISTER_TYPEFORM_ID = process.env.NEXT_PUBLIC_REGISTER_TYPEFORM_ID ?? "";

export default function Register() {
  const typeformContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!typeformContainer.current) {
      return;
    }

    createWidget(REGISTER_TYPEFORM_ID, {
      container: typeformContainer.current,
    });
  }, []);

  return (
    <Layout title={`${YEAR} Application`}>
      <div className={classes.root} ref={typeformContainer} />
    </Layout>
  );
}
