import React from 'react'
import {Helmet} from 'react-helmet'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

import '../components/global.css'

import Page from '../components/page'

export default ({data}) => <Page>
  <Helmet>
    <title>Launched LA</title>
  </Helmet>

  <div style={{width: '400px'}}>
    <Img fluid={data.file.childImageSharp.fluid} />
    <p style={{marginTop: '2rem'}}>We conceive, explore, and launch healthy lifestyle next-gen brands offering premium but affordable choices in retail and beyond. We work with other passionate thought leaders to deliver on the promise that everyone deserves access to healthier alternatives.</p>
    <p>For all inquiries please <a href='mailto:contact@launched.la'>contact us</a>.</p>
    <p>Los Angeles, USA // &copy;2019</p>
  </div>
</Page>

export const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`