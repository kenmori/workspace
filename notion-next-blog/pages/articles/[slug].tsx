import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import React from "react";
import ArticleMeta from "../../components/ArticleMeta";
import Layout from "../../components/Layout";
import { AirticleProps, Params } from "../../types/types";
import { sampleCards } from "../../utils/sample";


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {slug} = ctx.params as Params // as [slug].tsx
  const page = sampleCards.find((card) => card.slug === slug)

  return {
    props: {
      page
    }
  }
}

// NextPage Page型
const Article: NextPage<AirticleProps> = ({page}) => {
  return (
    <Layout>
      <article className="w-full">
        {/* meta section */}
        <div className="my-12">
          <ArticleMeta page={page} />
        </div>

        {/* article */}
        <div className="my-12">article {page.author}</div>
      </article>
    </Layout>
  );
};

export default Article;
