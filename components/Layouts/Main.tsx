import React, { ReactNode } from 'react';
import Head from 'next/head';

import Navbar from '../Navbar';
import { Poppins } from '@next/font/google';

interface IMainLayout {
  seoTitle: string;
  children: ReactNode;
  router: any;
}

const poppins = Poppins({
  weight: ['200', '400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
});

function Main({ seoTitle, children, router }: IMainLayout) {
  return (
    <div className={`${poppins.variable} font-poppins`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Olivers's homepage" />
        <meta name="author" content="Oliver Patrick" />
        <meta name="author" content="dev_op" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Oliver Patrick" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dev_op" />
        <meta name="twitter:creator" content="@dev_op" />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/1520014889120677892/Wcfx6N9L_400x400.jpg"
        />
        <meta property="og:site_name" content="Oliver Patrick" />
        <meta name="og:title" content="Oliver Patrick" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1520014889120677892/Wcfx6N9L_400x400.jpg"
        />
        <title>{seoTitle}</title>
      </Head>
      <Navbar path={router.asPath} />
      <div>{children}</div>
    </div>
  );
}

export default Main;
