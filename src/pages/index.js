import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav/index"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
  </Layout>
)

export default IndexPage;
