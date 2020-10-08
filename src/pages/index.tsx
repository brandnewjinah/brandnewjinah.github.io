import React from "react"
import { graphql, Link } from "gatsby"

//import components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Project from "../components/project"

//import styles and assets
import styled from "styled-components"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />

    <ProjectWrapper>
      <Link to="/projects">
        <h6>Projects</h6>
      </Link>
      <Project />
    </ProjectWrapper>

    <BlogWrapper>
      <Link to="/blog">
        <h6>Blog</h6>
      </Link>
      <BlogPosts>
        {data.allMarkdownRemark.edges.slice(0, 3).map(({ node }) => (
          <div key={node.id} style={{ paddingBottom: "1.5em" }}>
            <Link to={node.fields.slug}>
              <span>{node.frontmatter.date}</span>
              <h4> {node.frontmatter.title} </h4>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </BlogPosts>
    </BlogWrapper>
  </Layout>
)

const ProjectWrapper = styled.section`
  max-width: 1024px;
  padding: 2em;
  margin: 0 auto;

  h6 {
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: underline;
  }
`

const BlogWrapper = styled.section`
  max-width: 1024px;
  padding: 2em;
  margin: 5em auto 0;

  h6 {
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: underline;
  }
`
const BlogPosts = styled.div`
  padding: 1.875em 0;

  span {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.105em;
  }

  h4 {
    margin-bottom: 0.3em;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`

export default IndexPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MM.DD.YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
