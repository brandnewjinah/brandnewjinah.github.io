import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

//import styles and assets
import styled from "styled-components"
import colors from "../components/colors"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Post>
          <div>
            <h3>{post.frontmatter.title}</h3>
            <h6>{post.frontmatter.date}</h6>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Post>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  max-width: 1024px;
  padding: 2em;
  margin: 0 auto;
`

const Post = styled.section`
  h3 {
    text-align: center;
  }

  h6 {
    font-size: 1rem;
    text-align: center;
    margin: 1em 0 4em;
    color: ${colors.gray};
  }
`

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MM.DD.YYYY")
      }
      excerpt
    }
  }
`
