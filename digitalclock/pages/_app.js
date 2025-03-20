import React from "react";
import Head from "next/head";
import '@/styles/globals.css';


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head> 
    <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        />
    <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet" />
        <link rel= "icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel= "icon" href="/poster.svg" type="image/svg+xml" />
    </Head>
    <Component {...pageProps} />
    </>
  );
}
