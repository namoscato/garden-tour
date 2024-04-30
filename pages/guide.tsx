import { GardenMap } from "components/GardenMap";
import { Garden } from "lib/gardensProvider/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

interface Props {
  gardens: Garden[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: { gardens: [] },
  };
};

export default function Guide({
  gardens,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="Guide" />
      <GardenMap gardens={gardens} />
    </>
  );
}
