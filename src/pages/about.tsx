// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import About from "../components/about";
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About SHRED">
      <About />
    </Layout>
  );
};
export const Head = () => <title>About SHRED</title>;

// Step 3: Export your component
export default AboutPage;
