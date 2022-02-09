import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';

export const getStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale, ['common', 'home'])) },
  };
};

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <div>
      <Head>
        <title>cor Chile</title>
        <meta name="cor Chile" content="cor Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <video autoPlay loop muted className="object-cover h-full w-full">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </Layout>
      {t(`test`)}
    </div>
  );
}
