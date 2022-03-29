import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Present from '../components/attributes/Present';
import Unique from '../components/attributes/Unique';

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
      <Hero />
      <Unique />
      <Present />
    </Layout>
  );
}
