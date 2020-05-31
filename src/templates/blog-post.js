import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Bio from "../components/bio"

export default function Template({ data }) {
    const post = data.markdownRemark
    return(
        <Layout>
        <div className="container" style={{ width: '80%', margin: '0 auto' }}>
            <Helmet title = {post.frontmatter.title } />
            <article className="blog-post">
                
                <h1>{ post.frontmatter.title }</h1>
                <h4 style={{ color: '#777' }}>{ post.frontmatter.date }</h4>
                { post.frontmatter.featuredImage !== null && <Image fluid={ post.frontmatter.featuredImage.childImageSharp.fluid } /> }
                <div className="blog-post-content" dangerouslySetInnerHTML = {{ __html: post.html }} />
            </article>
            {/* <hr /> */}
            {/* <Bio /> */}
        </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 800, maxHeight: 350) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`