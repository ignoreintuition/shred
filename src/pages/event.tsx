import * as React from "react";
import Layout from "../components/layout";
import Event from "../components/event";
import Cards from "../components/cards";
const EventPage = () => {
  return (
    <Layout pageTitle="SHRED Events">
      <Event />
      <Cards />
    </Layout>
  );
};
export const Head = () => <title>SHRED Events</title>;

export default EventPage;
