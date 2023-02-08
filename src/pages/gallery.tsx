import { graphql } from "gatsby";
import React from "react";
import Gallery from "@browniebroke/gatsby-image-gallery";
import Layout from "../components/layout";

const GalleryPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp);
  return (
    <Layout pageTitle="SHRED Gallery">
      <Gallery images={images} />
    </Layout>
  );
};
export const Head = () => <title>SHRED Gallery</title>;

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile (
      filter: { relativeDirectory: { eq: "gallery" } }
    ){
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
export default GalleryPage;
