import React from "react";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head> 
        {"http://www.w3.org/1999/xlink"}
        <link rel= "icon" href="/favicon.svg" type="image/svg+xml" />
    </Head>
    <Component {...pageProps} />
    </>
  );
}
