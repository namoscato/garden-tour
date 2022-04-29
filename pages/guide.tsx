import Map from "components/Map";
import { Garden } from "lib/gardensProvider/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import React from "react";

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
      <Map gardens={gardens} />
    </>
  );
}
