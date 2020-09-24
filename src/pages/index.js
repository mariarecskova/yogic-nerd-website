import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { TextBox, Duality } from "../components/textBox"
import StyledArtDirectedBackground from '../components/BackgroundSection';



const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledArtDirectedBackground>
      <TextBox>
        <Duality>
          Duality is a bliss. In my case, tech and yoga co-exist.
          Coding gives me tools for endless creativity. In my projects I focus both on usability and design harmony. Yoga nurtures my body and soul. I am happy to share this gift with other people during my classes.
      </Duality>
      </TextBox>
    </StyledArtDirectedBackground>
  </Layout>
)




export default HomePage;
