import React from 'react'
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <Nav />
        <h1>Contact</h1>
        <img></img>
        <p>Email: maria@yogicnerd.de
</p>
        <Link to="/">Go back to the homepage</Link>
        <Footer />
    </Layout>

)
export default Contact;