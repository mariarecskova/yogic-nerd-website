import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../pages/pageStyles/index.css"

const HomePage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="hero-container">
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "start.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


export default HomePage;
