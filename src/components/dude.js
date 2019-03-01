import React from 'react'
import Img from 'gatsby-image'

import { StaticQuery, graphql } from 'gatsby'

const getDude = graphql`
  {
    file(relativePath: { eq: "slider-img3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default function dude() {
  return (
    <StaticQuery
      query={getDude}
      render={data => {
        console.log(data)
        return <Img fluid={data.file.childImageSharp.fluid} />
      }}
    />
  )
}
