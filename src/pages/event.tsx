import * as React from "react";
import Layout from "../components/layout";
import Event from "../components/event";
const AboutPage = () => {
  return (
    <Layout pageTitle="SHRED Events">
      <Event />
    </Layout>
  );
};
export const Head = () => <title>SHRED Events</title>;

export default AboutPage;
