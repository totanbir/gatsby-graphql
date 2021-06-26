import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <h1>Hi my website is a build comeing soon.....</h1>
    <p>Hi man my first gates site is ruing...</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage


