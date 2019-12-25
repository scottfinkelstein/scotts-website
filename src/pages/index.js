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
      <div class="primary-bar">
        <div id="image">
        <Image fixed={ data.avatar.childImageSharp.fixed } alt={ data.site.siteMetadata.author } />
        </div>
      <h1>
        <span style={{ color: '#3A619A' }}>Technologist</span><br />
        <span style={{ color: '#468820' }}>IT Leader</span><br />
        <span style={{ color: '#AC9A12' }}>Developer</span>
      </h1>
      </div>
      <div class="secondary-bar">
      <h3>Musings</h3>
      <div class="posts">
      { posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
        return(
          <div key="{ post.id }">
            <Link to={ post.frontmatter.path }>{ post.frontmatter.title }</Link>
          </div>
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