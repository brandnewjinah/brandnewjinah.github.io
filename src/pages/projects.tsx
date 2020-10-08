import React from "react"
import { Link } from "gatsby"

//import components
import Layout from "../components/layout"
import Project from "../components/project"

//import styles and assets
import styled from "styled-components"

const Projects = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Project />
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  max-width: 1024px;
  padding: 2em;
  margin: 0 auto;
`

export default Projects
