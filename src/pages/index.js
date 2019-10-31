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

  <div>
    <Img fluid={data.logo.childImageSharp.fluid} style={{margin: '0 auto', maxWidth: '400px'}} />
    <p style={{marginTop: '2rem', maxWidth: '700px'}}>We conceive, explore, and launch healthy lifestyle next-gen brands offering premium but affordable choices in retail and beyond. We work with other passionate thought leaders to deliver on the promise that everyone deserves access to healthier alternatives.</p>
    <div className='grid'>
      <a href='https://hellobello.com' target='_blank'>
        <Img fluid={data.helloBelloLogo.childImageSharp.fluid} />
      </a>
      <a href='https://tillerandhatch.com' target='_blank'>
        <Img fluid={data.tillerAndHatchLogo.childImageSharp.fluid} />
      </a>
      <a href='https://taffersmix.com' target='_blank'>
        <Img fluid={data.taffersLogo.childImageSharp.fluid} />
      </a>
      <Img fluid={data.stateOfSunLogo.childImageSharp.fluid} />
    </div>
    <p>For all inquiries please <a href='mailto:contact@launched.la'>contact us</a>.</p>
    <p>17383 Suite B200 Sunset Blvd Pacific Palisades CA, 90272 USA // &copy;2019</p>
  </div>
</Page>

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    helloBelloLogo: file(relativePath: { eq: "logo-hello-bello.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    stateOfSunLogo: file(relativePath: { eq: "logo-state-of-sun.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    taffersLogo: file(relativePath: { eq: "logo-taffers.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    tillerAndHatchLogo: file(relativePath: { eq: "logo-tiller-and-hatch.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
