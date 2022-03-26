import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Present from '../components/attributes/Present';
import Unique from '../components/attributes/Unique';

import botella from '../public/botella.png';

export const getStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) },
  };
};

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <Layout>
      <Head>
        <title>cor Chile</title>
      </Head>
      <div className="absolute top-32 md:top-40 lg:top-44 xl:top-50 xl:left-28 w-5/12">
        <Image src={botella} alt="Cordillera" layout="responsive" />
        <div></div>
      </div>
      <Hero />
      <Unique />
      <Present />
    </Layout>
  );
}
