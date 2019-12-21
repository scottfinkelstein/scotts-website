import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo">
      <h1>
        <Link
          to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <ul className="top-nav">
      <li><Link to={ '/about' }>About</Link></li>
      <li><Link>Contact</Link></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
