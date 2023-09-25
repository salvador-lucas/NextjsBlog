import Layout from '@/components/layout/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Nextjs blog general</title>
        <meta name="viewport" content="initial-scale-1.0, width=device-with" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
