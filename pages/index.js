import React, { useEffect, useState } from "react";
import Head from "next/head";
import Home from "../components/pages/home/Home";
import Galaxy from "../components/pages/home/Galaxy";
import useWindowSize from "../hooks/useWindowSize";
import * as layout from "../constants/layout";

const Index = () => {
  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowSize)
      setIsMobile(() => windowSize.width <= layout.SCREEN_SMALL_MAX);
  }, [windowSize]);

  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home isMobile={isMobile} />
      <Galaxy isMobile={isMobile} />
    </React.Fragment>
  );
};

export default Index;
