import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../components/Layout';

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
          <h1 className="text-3xl mb-10">
            <span className="font-semibold">Única</span> para tu estilo
          </h1>
          <h2 className="text-xl font-semibold">Cordillera</h2>
          <p>
            <span className="font-medium">Estilo y comodidad.</span> Recibe la
            energía de la cordillera en un elegante cristal.
          </p>
          <div className="flex flex-row items-center justify-around">
            <Image src={botellaVidrio} alt="Botella Cordillera" />
            <div>Info nutricional, peso, diseño botella, etc.</div>
          </div>
        </div>
        <svg
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150 w-full"
        >
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 110.42857142857142,113.85714285714286 220.85714285714283,94.71428571428571 336,111 C 451.14285714285717,127.28571428571429 571.0000000000001,179 686,181 C 800.9999999999999,183 911.1428571428571,135.28571428571428 1036,119 C 1160.857142857143,102.71428571428571 1300.4285714285716,117.85714285714286 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            fill="#0693e388"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 152.03571428571428,272.67857142857144 304.07142857142856,279.35714285714283 410,275 C 515.9285714285714,270.64285714285717 575.7499999999999,255.25 690,246 C 804.2500000000001,236.75 972.9285714285713,233.64285714285714 1107,238 C 1241.0714285714287,242.35714285714286 1340.5357142857142,254.17857142857144 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            fill="#0693e3ff"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
        </svg>
        <div className="flex flex-col space-y-4 px-96 bg-[#0693e3ff] pb-60">
          <h1 className="text-3xl mb-10">
            <span className="font-semibold">Única</span> para tu estilo
          </h1>
          <h2 className="text-xl font-semibold">Viento</h2>
          <p>
            <span className="font-medium">
              Para los amantes del movimiento.
            </span>{' '}
            Resistente y amigable con el medio ambiente.
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
