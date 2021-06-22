import cn from "classnames";
import Content from "components/Content";
import Dates from "components/Dates";
import Layout from "components/Layout";
import { useAbsoluteUrl } from "hooks/useAbsoluteUrl";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { jsonLdScriptProps } from "react-schemaorg";
import { Event } from "schema-dts";
import classes from "./Home.module.scss";
import { DESCRIPTION, TITLE } from "./_app";

export default function Home() {
  const imageUrlPrefix = useAbsoluteUrl("/images");

  return (
    <Layout>
      <Head>
        <script
          {...jsonLdScriptProps<Event>({
            "@context": "https://schema.org",
            "@type": "Event",
            name: TITLE,
            startDate: "2021-07-16T20:30:00-05:00",
            endDate: "2021-07-18T16:00:00-05:00",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            location: {
              "@type": "Place",
              name: "Village of Kenmore",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kenmore",
                postalCode: "14217",
                addressRegion: "NY",
                addressCountry: "US",
              },
            },
            image: [
              `${imageUrlPrefix}/og-1x1.jpg`,
              `${imageUrlPrefix}/og-4x3.jpg`,
              `${imageUrlPrefix}/og-16x9.jpg`,
            ],
            description: DESCRIPTION,
          })}
        />
      </Head>
      <Content>
        <div className={classes.root}>
          <h1 className="title">2021 Garden Tour</h1>
          <Dates />
          <div className={classes.callToAction}>
            <Link href="/guide">
              <a className={cn("button", classes.callToActionButton)}>
                View Guide
              </a>
            </Link>
          </div>
          <h1 className="title">About</h1>
          <p>
            The Ken-Ton Garden Tour is one of the most anticipated events of the
            summer in the Ken-Ton community. It’s an annual celebration of color
            that showcases the hard work and dedication of local gardeners. As
            time goes on, the Ken-Ton Garden Tour continues to engender a sense
            of civic pride.{" "}
            <Link href="/about">
              <a>Read more</a>
            </Link>
            .
          </p>
        </div>
      </Content>
    </Layout>
  );
}
