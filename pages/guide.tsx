import { GardenMap } from "components/GardenMap";
import { fetchGardens } from "lib/gardensProvider/fetchGardens";
import { Garden } from "lib/gardensProvider/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

interface Props {
  gardens: Garden[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const gardens = await fetchGardens();

  return {
    props: { gardens },
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
