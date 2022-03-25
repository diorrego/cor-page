import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../components/Layout';
import DoubleWave from '../components/waves/DoubleWave';
import FullView from '../components/products/FullView';

import botellaVidrio from '../public/botellaVidrio.jpeg';

export const getStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) },
  };
};

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>cor Chile | Products</title>
      </Head>
      <section className="pt-40 flex flex-col w-full">
        <FullView
          image={botellaVidrio}
          title="Única y exclusiva"
          name="Cordillera"
          description="Arte y comodidad para recibir la energía de la cordillera."
        />
        <DoubleWave />
        <FullView
          image={botellaVidrio}
          title="Única y divertida"
          name="Viento"
          description="Todo el poder de la cordillera para los amantes del movimiento y la salud."
        />
      </section>
    </Layout>
  );
}
