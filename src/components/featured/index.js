import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby';
import "./featured.css";

export default () => (
    <StaticQuery
        query={graphql`
    query FeaturedQuery {
        allContentfulBlog(
            limit: 1
            sort: { fields: [createdAt], order: DESC }
            filter: {
            node_locale: {eq: "en-US",}
            featured: {eq: true}
            }
            ) {
            edges {
            node {
            id
            slug
            title
            description
            featuredImage {
            fluid(maxWidth: 1200, quality: 85){
            src
            ...GatsbyContentfulFluid
         }
        } 
    }
}
}
}
` }
        render={data => (
            <header>
                {data.allContentfulBlog.edges.map(edge => (
                    <div key={edge.node.id} className="header-section">
                        <div className="header-hero" style={{ backgroundImage: `url(${edge.node.featuredImage.fluid.src})` }}></div>
                        <div className="header-content">
                            <div className="header-info">
                                <h1 className="header-title">{edge.node.title}</h1>
                                <p className="header-subititle">{edge.node.description}</p>
                                <button onClick={() => navigate(`/blog/${edge.node.slug}`)} className="btn-med">Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </header>
        )}
    />
)
