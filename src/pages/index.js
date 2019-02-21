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
    <div style={{marginTop: '16px'}}>We conceive, explore, and launch healthy lifestyle next-gen brands offering premium but affordable choices in retail and beyond. We work with other passionate thought leaders to deliver on the promise that everyone deserves access to healthier alternatives.</div>
    <div style={{marginTop: '16px'}}>For all inquiries please <a href='mailto:contact@launched.la'>contact us</a>.</div>
    <div style={{marginTop: '16px'}}>
      Los Angeles, USA // &copy;2019
    </div>
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