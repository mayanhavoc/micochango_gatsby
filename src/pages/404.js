import * as React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from '../components/head'


// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="404 Not found"/>
      <h1>Page not found</h1>
      <p><Link to="/">Return home</Link></p>
    </Layout>
  )
}

export default NotFoundPage
