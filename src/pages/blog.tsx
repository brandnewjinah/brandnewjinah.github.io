import React from "react"
import { Link, graphql } from "gatsby"

//import components
import Layout from "../components/layout"

//import styles and assets
import styled from "styled-components"
import colors from "../components/colors"

const Blog = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Section>
          <h6>{data.allMarkdownRemark.totalCount} Posts</h6>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <Post>
                  <span>{node.frontmatter.date}</span>
                  <h6>{node.frontmatter.title}</h6>
                  <p>{node.excerpt}</p>
                </Post>
              </Link>
            </div>
          ))}
        </Section>
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  max-width: 1024px;
  padding: 2em;
  margin: 0 auto;
`

const Section = styled.section`
  padding: 5vw;
`
const Post = styled.article`
  padding: 10px 0;

  span {
    font-size: 0.875rem;
    color: ${colors.lightgray};
  }

  h6 {
    color: ${colors.darkgray};
  }

  p {
    color: ${colors.lightgray};
  }
`

export default Blog

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
