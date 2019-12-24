import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"

const Header = ({ siteData }) => (
  <header>
    
      
      <div class="logo">
          <Link to="/"><Image fixed={ siteData.avatar.childImageSharp.fixed } alt={ siteData.site.siteMetadata.author } style={{ borderRadius: '100%', minWidth: 50, marginRight: '1rem' }} /></Link>
          <div>
          <span style={{ display: 'block' }} class="site-title"><Link to="/">{siteData.site.siteMetadata.title}</Link></span>
          <span style={{ display: 'block' }}><a href={ "https://instagram.com/" + siteData.site.siteMetadata.instagram } target="_blank" rel="noopener">IG</a> | <a href={ "https://twitter.com/" + siteData.site.siteMetadata.twitter } target="_blank" rel="noopener">TW</a></span>
          </div>
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

