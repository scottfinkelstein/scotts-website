import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return(
    <Layout>
      <SEO title="Home" />
      <p dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.description }}></p>
      <h3>My Posts</h3>
      { posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
        return(
          <div key="{ post.id }">
            <h3><Link to={ post.frontmatter.path }>{ post.frontmatter.title }</Link></h3>
          </div>
        )
      })}
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
  }
`