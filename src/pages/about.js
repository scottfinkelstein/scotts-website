import React from 'react'
import { Link, graphql, StaticQuery, useStaticQuery } from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from 'gatsby-image'
import Bio from '../components/bio'

class About extends React.Component {
    
    render () {
        return (
            <Layout>
                <SEO title="About Me" />
                <div className="container">
                    <p>I manage the Mobile and Web Technologies team at <a href="https://adelphi.edu" target="_blank" rel="noopener noreferrer">Adelphi University,</a> overseeing development for both the university website and mobile app.</p>
                </div>
            </Layout>
        )
    }
    
}

export default About;
