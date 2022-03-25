import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../components/Layout';

export const getStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) },
  };
};

export default function Us() {
  return (
    <Layout>
      <Head>
        <title>cor Chile | Sobre Nosotros</title>
      </Head>
    </Layout>
  );
}
