import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../components/Layout';
import DoubleWave from '../components/waves/DoubleWave';
import ProductFullView from '../components/products/ProductFullView';

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
      <section className="pt-24 sm:pt-32 w-full">
        <ProductFullView
          image={botellaVidrio}
          slogan="Única y exclusiva"
          name="Cordillera"
          description="Arte y comodidad para recibir la energía de la cordillera."
        />
        <DoubleWave className="w-full z-20" />
        <ProductFullView
          image={botellaVidrio}
          slogan="Única y divertida"
          name="Viento"
          description="Todo el poder de la cordillera para los amantes del movimiento y la salud."
          className="bg-container pb-24 sm:pb-32 text-white-cor z-10 -mt-1"
        />
      </section>
    </Layout>
  );
}
