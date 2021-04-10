import cn from "classnames";
import Content from "components/Content";
import Layout, { DESCRIPTION } from "components/Layout";
import { useAbsoluteUrl } from "hooks/useAbsoluteUrl";
import { useSiteTitle } from "hooks/useSiteTitle";
import Head from "next/head";
import Link from "next/link";
import { jsonLdScriptProps } from "react-schemaorg";
import { Event } from "schema-dts";
import classes from "./Home.module.scss";

export default function Home() {
  const title = useSiteTitle();
  const imageUrlPrefix = useAbsoluteUrl("/images");

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <script
          {...jsonLdScriptProps<Event>({
            "@context": "https://schema.org",
            "@type": "Event",
            name: title,
            startDate: "2021-06-18T20:30:00-05:00",
            endDate: "2021-06-16:00:00-05:00",
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
          <h1 className={classes.title}>2021 Garden Tour</h1>
          <h2 className={classes.dates}>
            June 19 – 20 / 10am – 4pm
            <br />
            June 18 – 19 / 8:30pm – 10:30pm
          </h2>
          <div className={classes.registration}>
            <Link href="/register">
              <a className={cn("button", classes.registrationButton)}>
                Register
              </a>
            </Link>
            by June 8
          </div>
          <h1 className={classes.title}>About</h1>
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
