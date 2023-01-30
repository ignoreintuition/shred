import * as React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";

const IndexPage = () => {
  return <Layout pageTitle="Welcome to SHRED">
    <Hero />
  
  </Layout>;
};

export const Head = () => <title>Home Page</title>;
export default IndexPage;
