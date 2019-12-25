import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  
  return(
    <Layout>
      <SEO title="Home" />
      <div className="primary-bar">
        <div id="image">
        <Image fixed={ data.avatar.childImageSharp.fixed } alt={ data.site.siteMetadata.author } />
        </div>
      <h1>
        <span style={{ color: '#3A619A' }}>Technologist</span><br />
        <span style={{ color: '#468820' }}>IT Leader</span><br />
        <span style={{ color: '#AC9A12' }}>Developer</span>
      </h1>
      </div>
      <div className="container">
      <h3>Musings</h3>
      <div className="posts">
      { posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
        return(
          <Link key="{ post.id }" to={ post.frontmatter.path } style={{ position: 'relative' }}>
            { post.frontmatter.featuredImage !== null && <Image fixed={ post.frontmatter.featuredImage.childImageSharp.fixed } style={{ position: 'absolute', top: '0', left: '0' }} /> }
            <span style={{ position: 'absolute', top: '0', left: '0' }}>{ post.frontmatter.title }</span>
          </Link>
        )
      })}
      </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
            path
            featuredImage {
              childImageSharp {
                fixed(width: 248, height: 124) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    avatar: file(absolutePath: { regex: "/scott.png/" }) {
      childImageSharp {
          fixed(width: 348, height: 302) {
              ...GatsbyImageSharpFixed
          }
      }
    }
  }
`