import * as React from "react";
import Layout from "../components/layout";
import Donate from "../components/donate"
const DonatePage = () => {
  return (
    <Layout pageTitle="Donate">
     <Donate /> 
    </Layout>
  );
};
export const Head = () => <title>Donate</title>;

export default DonatePage;
