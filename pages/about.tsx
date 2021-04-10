import "@typeform/embed/build/css/widget.css";
import Content from "components/Content";
import Layout from "components/Layout";
import { useSiteTitle } from "hooks/useSiteTitle";
import Head from "next/head";

export default function Register() {
  const title = useSiteTitle("About");

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Content>
        <p>
          The Ken-Ton Garden Tour is one of the most anticipated events of the
          summer in the Ken-Ton community. It's an annual celebration of color
          that showcases the hard work and dedication of local gardeners.
        </p>
        <p>
          Rooted in humble beginnings, the Ken-Ton Garden Tour began in 2002,
          then known as the <em>Town of Tonawanda Treasure Spots Program</em>.
          The program was originally envisioned as a small and simple activity
          in which Town and Village of Kenmore residents could nominate their
          choice for the most attractive and well-maintained commercial and
          civic properties (i.e., "treasured spots" in our community). Nominated
          properties would later be evaluated, and the top ten were designated
          with a lawn sign during the first weekend in August.
        </p>
        <p>
          Despite the intended focus on commercial and civic properties, a July
          10, 2002 article in <em>The Buffalo News</em> mistakenly advised the
          public to nominate residential properties instead.
        </p>
        <p>
          In a matter of days, volunteers logged several dozen phone calls from
          eager residents boasting of their neighbors’ botanical
          accomplishments.
        </p>
        <p>
          With such a dramatic outpouring of interest, organizers decided to
          adjust the format of the program to accommodate home gardens, despite
          having just three weeks to pull it all together. This decision paved
          the way for what would become the second home garden tour in Western
          New York, next to{" "}
          <a href="https://www.gardensbuffaloniagara.com/" target="_blank">
            Garden Walk Buffalo
          </a>
          .
        </p>
        <p>
          That first year, organizers chose to use the term "garden{" "}
          <em>tour</em>" instead of "garden walk" to discourage garden
          enthusiasts from attempting to walk the sometimes three mile distance
          between participating gardens, which were scattered throughout the
          Town.
        </p>
        <p>
          The inaugural <em>Treasure Spots Garden Tour</em> took place as
          planned the first weekend in August 2002, when hundreds of visitors
          flocked to the Town of Tonawanda and Village of Kenmore to see a
          magnificent and diverse - although small - collection of local
          gardens. Organizers were amazed at the success of the event,
          especially considering that it was born out of a misunderstanding and
          largely pulled together in just a few weeks.
        </p>
        <p>
          Over the next two years, the <em>Treasure Spots</em> garden tour grew
          and matured, drawing larger crowds and visitors from as far as
          Pennsylvania, Ohio, Ontario, and beyond. As notoriety grew, so too did
          the number of participating gardeners and the prevalence of tacky
          newspaper headlines (e.g., "Landscaping contest yields a bounty of
          'treasure spots'").
        </p>
        <p>
          After the third year, significant improvements came to the{" "}
          <em>Treasure Spots Program</em>. The name of the Program was changed
          to the <em>Ken-Ton Garden Tour</em> to better reflect the geographic
          and community-centric context of the annual gardening event. Also, the
          practice of "nominating" gardens for inclusion in the tour was dropped
          in lieu of a more practical registration process. The new process
          welcomed any and all gardeners in the Village of Kenmore and Town of
          Tonawanda to personally register their home garden as a destination on
          the Ken-Ton Garden Tour. Registrants received a lawn sign for display
          purposes during the event, and their address and a description of
          their garden were included in a guidebook distributed throughout the
          community.
        </p>
        <p>
          Beginning in 2011, the date of the Ken-Ton Garden Tour shifted from
          the first weekend in August to the second-last weekend in July. The
          date change came at the request of gardeners, since they believed
          their flowers were in a peak bloom state. Additionally, this was a way
          for the Tour to join the{" "}
          <a href="https://www.gardensbuffaloniagara.com/" target="_blank">
            Gardens Buffalo Niagara
          </a>
          , a five-week celebration of gardening in Western New York. We are
          pleased to be a part of this annual Buffalo-area tradition.
        </p>
        <p>
          Also in 2011, the Ken-Ton Garden Tour hosted its first Saturday Night
          Lights event, an evening tour showcasing select gardens after dusk.
          This annual tradition was modeled after the popular Starry Night Tour
          of the annual Black Rock-Riverside Tour of Gardens.
        </p>
        <p>
          As time goes on, the Ken-Ton Garden Tour continues to engender a sense
          of civic pride among Town and Village residents and stresses the
          ability of beautification to enhance our community’s quality of life.
        </p>
      </Content>
    </Layout>
  );
}
