import React from "react"
import PropTypes from "prop-types"
import Footer from "../footer"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Nav from '../nav/index';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>
        <Nav />
        {children}
        <Footer />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
