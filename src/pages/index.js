import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav/index"
import Featured from "../components/featured/index"
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Featured />
  </Layout>
)

export default IndexPage;
