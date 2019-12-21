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
                <p>I manage the Mobile and Web Technologies team at <a href="https://adelphi.edu" target="_blank" rel="noopener noreferrer">Adelphi University,</a> Overseeing development for both the university website and mobile app.</p>
                <p>Aside from web and mobile, other platforms I enjoy developing for include:</p>
                <ul>
                    <li>Apple Watch</li>
                    <li><a href="https://www.magicleap.com" target="_blank" rel="noopener noreferrer">Magic Leap</a></li>
                    <li>Amazon Alexa</li>
                </ul>
            </Layout>
        )
    }
    
}

export default About;
