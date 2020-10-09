import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import styles and assets
import styled from "styled-components"

const NotFoundPage = () => (
  <Layout>
    <Container>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

const Container = styled.section`
  max-width: 1024px;
  padding: 2em;
  margin: 0 auto;
`

export default NotFoundPage
