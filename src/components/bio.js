import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
                childImageSharp {
                    fixed(width: 50, height:50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <div style={{ display: `flex`, alignItems: `center` }}>
            <Image fixed={ data.avatar.childImageSharp.fixed } alt={ data.site.siteMetadata.author } style={{ borderRadius: `100%`, minWidth: 50, marginRight: `1rem` }} />
            <p>Scott is a technology leader in Higher Ed creating digital experiences and process changes. All opinions in are his own.</p>
        </div>
    )
}

export default Bio