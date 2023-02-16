import * as React from "react";
import Layout from "../components/layout";
import Shop from "../components/shop";
const ShopPage = () => {
  return (
    <Layout pageTitle="SHRED Shop">
      <Shop />
    </Layout>
  );
};
export const Head = () => <title>SHRED Shop</title>;

export default ShopPage;
