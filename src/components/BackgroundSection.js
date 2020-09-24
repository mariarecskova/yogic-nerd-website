import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const ArtDirectedBackground = ({ className }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
  query {
   mobileImage: file(relativePath: { eq: "start.png" }) {
      childImageSharp {
        fluid(maxWidth: 490, maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopImage: file(relativePath: { eq: "start.png"}) {
        childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
}`
  )
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
  ]
  return (
    <BackgroundImage
      Tag={`section`}
      className={className}
      fluid={sources}>
    </BackgroundImage>
  )
}


const StyledArtDirectedBackground = styled(ArtDirectedBackground)`
  width: 100vw;
  height: 80vh;
  background-size: contain;
  background-color: transparent;
  padding: 0;
  padding-top: 13%;
  z-index: -2;
  margin: 0
`

export default StyledArtDirectedBackground
