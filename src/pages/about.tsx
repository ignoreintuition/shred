import * as React from "react";
import Layout from "../components/layout";
import About from "../components/about";
const AboutPage = () => {
  return (
    <Layout pageTitle="About SHRED">
      <About />
    </Layout>
  );
};
export const Head = () => <title>About SHRED</title>;

export default AboutPage;
