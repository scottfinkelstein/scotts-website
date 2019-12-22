import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"

const Header = ({ siteData }) => (
  <header>
    <div className="logo">
      <h1>
        <Link
          to="/">
          <Image fixed={ siteData.avatar.childImageSharp.fixed } alt={ siteData.site.siteMetadata.author } style={{ borderRadius: '100%', minWidth: 50, marginRight: '1rem' }} />
          {siteData.site.siteMetadata.title}
        </Link>
      </h1>
    </div>
    <ul className="top-nav">
      <li><Link to={ '/about' }>About</Link></li>
      <li><Link>Contact</Link></li>
    </ul>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header

