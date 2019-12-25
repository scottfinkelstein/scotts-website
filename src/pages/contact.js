import React from 'react'
import { Link, graphql, StaticQuery, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

class Contact extends React.Component {
    render() {
        return(
            <Layout>
                <SEO title="Contact" />
                <div className="container">
                    <p>Contact Me</p>
                </div>
            </Layout>
        )
    }
}

export default Contact