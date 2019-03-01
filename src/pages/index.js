import React from 'react'
import { Link } from 'gatsby'

import Info from '../components/info'
import Dude from '../components/dude'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { Button } from '../components/Button'
import { FaApple } from 'react-icons/fa'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Info />
    <Link to="/products/">Products</Link>
    <Link to="/images/">Images</Link>
    <Dude />
    <h1>Hi Blake</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <FaApple />
    <Button>Button</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/products/testing/">Testing</Link>
  </Layout>
)

export default IndexPage
