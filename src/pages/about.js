import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const About = () => (
  <Layout>
    <Nav />
    <SEO title="About" />
    <h1>About me</h1>
    <img></img>
    <p>We all have different roles in throughout our lives. I come from a small Slovakian village, I speak 5 laguages, and I am drawn by new challenges.

    After finishing my master degree of art history in Budapest in 2013 I worked in a small art gallery.  It was an exciting job, but my endless curiosity inspired me to explore other countires. I learned German and I moved to Berlin to work in customer service in Autumn of 2015. The buzzing capital has shown me a direction towards technology.  I embraced the endless creativity and straightforward logic of coding.

    In 2017 I started to practice yoga daily. It became an important part of my life. I kept this passion during my gap year spent with backpacking in Asia and Australia. In July 2018 I finished a 200 hours Multistyle Yoga Teacher Training in Dharamshala, India. Then I returned to Berlin, and started to teach hatha yoga in small studios. My current class is at BiSee Yoga.

    My curiosity for coding inspired me to improve my skills. In 2019 I finished a web developer course at Fraunenloop. This was followed by a 5 months intensive MERN stack bootcamp at Wild Code School. During this highly practical course we worked on several team projects with SCRUM methodology. I learned not only coding, but webdesign with Figma and Wordpress.
Here I made a collection of my bootcamp and individual projects.</p>
    <Link to="/">Go back to the homepage</Link>
    <Footer />
  </Layout>
)

export default About;
