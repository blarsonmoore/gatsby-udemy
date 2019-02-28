import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

const getData = graphql`
  {
    info: site {
      siteMetadata {
        title
        info
        description
        author
      }
    }
  }
`

export default function info() {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        const siteData = data.info.siteMetadata
        const { title, info, description, author } = siteData

        return (
          <div>
            <h2>{title}</h2>
            <h2>{info}</h2>
            <h2>{description}</h2>
            <h2>{author}</h2>
          </div>
        )
      }}
    />
  )
}
