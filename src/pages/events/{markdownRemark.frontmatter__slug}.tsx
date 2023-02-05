import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { event, eventText, eventImg, eventDetails } from "./events.module.css";
import Layout from "../../components/layout"

export default function EventTemplate({
  data, 
}) {
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark
  let featuredImg = getImage(frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)
  return (
    <Layout pageTitle={frontmatter.title}>
    <div className={event}>
      <div className={eventImg}>
      <GatsbyImage image={featuredImg} />
      </div>
      <div className={eventText}>
        <p>
          {frontmatter.eventDate}
          <br/>
          {frontmatter.time}
        </p>
        <p>
          {frontmatter.location}
          <br/>
          {frontmatter.address}
          <br/>
          {frontmatter.address2}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
    
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        eventDate(formatString: "MMMM DD, YYYY")
        slug
        title
        time
        location
        address
        address2
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`