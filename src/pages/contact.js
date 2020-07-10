import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <h1>Contact</h1>
        <img></img>
        <p>Email: maria@yogicnerd.de
</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>

)
export default Contact;