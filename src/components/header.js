import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"

const Header = ({ siteData }) => (
  <header>
    
      <Link to="/" className="logo">
        <Image fixed={ siteData.avatar.childImageSharp.fixed } alt={ siteData.site.siteMetadata.author } style={{ borderRadius: '100%', minWidth: 50, marginRight: '1rem' }} />
          <div>
          <span style={{ display: 'block' }} class="site-title">{siteData.site.siteMetadata.title}</span>
          <span style={{ display: 'block' }}>Higher Ed IT Leader</span>
          </div>
      </Link>
    
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

