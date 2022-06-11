import Map from "components/Map";
import { fetchGardens } from "lib/gardensProvider";
import { Garden } from "lib/gardensProvider/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import React from "react";

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
      <Map gardens={gardens} />
    </>
  );
}
