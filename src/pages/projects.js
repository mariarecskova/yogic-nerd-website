import React from 'react'
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"
const Projects = () => (
    <Layout>
        <SEO title="Projects" />
        <Nav />
        <h1>Projects</h1>
        <img></img>
        <p>Project details shortly.
</p>
        <Link to="/">Go back to the homepage</Link>
        <Footer />
    </Layout>
)
export default Projects;