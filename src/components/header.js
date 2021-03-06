import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"

const Header = ({ siteData }) => (
  <header>
    
      
      <div className="logo">
          <Link to="/"><Image fixed={ siteData.logo.childImageSharp.fixed } alt={ siteData.site.siteMetadata.author } style={{ minWidth: 50, marginRight: '1rem' }} /></Link>
          <div>
          <span style={{ display: 'block' }} className="site-title"><Link to="/">{siteData.site.siteMetadata.title}</Link></span>
          <span style={{ display: 'block' }}><a href={ "https://instagram.com/" + siteData.site.siteMetadata.instagram } target="_blank" rel="noopener">IG</a> | <a href={ "https://twitter.com/" + siteData.site.siteMetadata.twitter } target="_blank" rel="noopener">TW</a> | <a href="https://www.linkedin.com/in/sbf0202/" target="_blank" rel="noopener">LI</a></span>
          </div>
      </div>
    
    <ul className="top-nav">
      <li><Link to={ '/about' }>About</Link></li>
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

