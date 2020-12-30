import React from "react";
import Head from "next/head";
import Home from "../components/pages/home/Home";
import Galaxy from "../components/pages/home/Galaxy";

const Index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <Galaxy />
    </React.Fragment>
  );
};

export default Index;
