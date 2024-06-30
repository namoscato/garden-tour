import Content from "components/Content";
import { Home } from "components/Home/Home";
import Layout from "components/Layout";
import { useAbsoluteUrl } from "hooks/useAbsoluteUrl";
import Head from "next/head";
import { jsonLdScriptProps } from "react-schemaorg";
import type { Event } from "schema-dts";
import { DESCRIPTION, TITLE } from "./_app";

export default function HomePage() {
  const imageUrlPrefix = useAbsoluteUrl("/images");

  return (
    <Layout>
      <Head>
        <script
          {...jsonLdScriptProps<Event>({
            "@context": "https://schema.org",
            "@type": "Event",
            name: TITLE,
            startDate: "2024-07-19T20:30:00-05:00",
            endDate: "2024-07-21T16:00:00-05:00",
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
        <Home />
      </Content>
    </Layout>
  );
}
