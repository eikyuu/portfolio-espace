import React from "react";
import Head from "next/head";
import Home from "../components/pages/Home";

const Index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </React.Fragment>
  );
};

export default Index;
