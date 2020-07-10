import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Featured from "../components/featured/index"

const Blog = () => (
    <Layout>
        <SEO title="Blog" />
        <h1>Blog</h1>
        <Featured />
    </Layout>
)
export default Blog;