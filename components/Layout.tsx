import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

import Head from "next/head";
function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>AI IMAGE GENERATOR</title>
        <meta
          name="description"
          content="This AI powered application generates images from natural language"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../u_photo.svg" />
      </Head>
      <main>
        <Nav />
        {children}
        <Footer />
      </main>
    </>
  );
}

export default Layout;
