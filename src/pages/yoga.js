import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const Yoga = () => (
    <Layout>
        <SEO title="Yoga" />
        <Nav />
        <h1>Yoga</h1>
        <h2>Hatha Slow Flow</h2>
        <h3><Link to="http://bisee-yoga.de/timetable/event/hatha-slow-flow-yoga/">BiSee Yoga, Bizetstrasse 43
13088 Berlin</Link></h3>
        <img></img>
        <p>My slow flow creates a balance between strengthening postures and soothing relaxation. I give  detailed explanations about the anatomy and correct alignment of the poses.

        The class starts with a breathing meditation. Then the asana series releases the tension of the day. We always focus on a specific part of the body and each class is a bit different. Lately I have been teaching chakra-based practices.

        Towards the end the tempo slows down to yin-like seated and reclining postures. The sequences will help you to get rid of the everyday aches and pains. We finish with a relaxing gong meditation, that will put you at complete ease.

        The course’s main language is English, for request it can be also held in German. It is suitable for all levels.

        If you want to attend, please register via the Contact form.
</p>
        <Link to="/">Go back to the homepage</Link>
        <Footer />
    </Layout>
)

export default Yoga;