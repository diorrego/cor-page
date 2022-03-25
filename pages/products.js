import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../components/Layout';
import DoubleWave from '../components/waves/DoubleWave';

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
        <div className="flex flex-col space-y-4 px-96 ">
          <h1 className="title mb-10">
            Única <span className="font-semibold">y exclusiva</span>
          </h1>
          <h2 className="subtitle">Cordillera</h2>
          <p className="description">
            Estilo, comodidad y arte
            <span className="font-medium">
              para recibir la energía de la cordillera.
            </span>
            .
          </p>
          <div className="flex flex-row items-center justify-around">
            <Image src={botellaVidrio} alt="Botella Cordillera" />
            <div>Info nutricional, peso, diseño botella, etc.</div>
          </div>
        </div>
        <DoubleWave />
        <div className="flex flex-col space-y-4 px-96 bg-[#0693e3ff] pb-60">
          <h1 className="title mb-10">
            Única <span className="font-semibold">y divertida</span>
          </h1>
          <h2 className="text-xl font-semibold">Viento</h2>
          <p className="description">
            Para los amantes del movimiento{' '}
            <span className="font-medium">y la salud.</span>
          </p>
          <div className="flex flex-row items-center justify-around">
            <Image src={botellaVidrio} alt="Botella Cordillera" />
            <div>Info nutricional, peso, diseño botella, etc.</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
