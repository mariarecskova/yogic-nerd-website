import React from 'react'
import { Link } from "gatsby"
import Nav from "../components/nav"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Blog = () => (
    <Layout>
        <SEO title="Blog" />
        <Nav />
        <h1>Blog</h1>
        <img></img>
        <p>Blog articles will be shown shortly.
</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)
export default Blog;