import * as React from "react";
import Layout from "../components/layout";
import Contact from "../components/contact"
const ContactPage = () => {
  return (
    <Layout pageTitle="Contact SHRED">
      <Contact/>
    </Layout>
  );
};
export const Head = () => <title>Contact SHRED</title>;

// Step 3: Export your component
export default ContactPage;
