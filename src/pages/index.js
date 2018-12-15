import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

import '../components/global.css'

import Page from '../components/page'

export default ({data}) => <Page>
  <div>
    <Img fluid={data.file.childImageSharp.fluid} style={{width: '400px'}} />
    <div style={{marginTop: '16px'}}>
      Coming soon // LA, CA, USA // &copy;2019
    </div>
  </div>
</Page>

export const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`