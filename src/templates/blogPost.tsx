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
            <Title>{post.frontmatter.title}</Title>
            <Date>{post.frontmatter.date}</Date>
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

h4 {
    margin: 1.5em 0;
    color: ${colors.black}
  }

  h5 {
    margin: 1.5em 0;
    color: ${colors.black}
  }

  h6 {
    font-weight: 600;
    font-size: 1.05rem;
    margin: 1em 0 0;
    color: ${colors.darkgray}
  }

  ul{
    margin: 1em 0 2em;
  }

  ol{
    margin: 1em 0 2em;
  }

  a {
    &:hover img {
      opacity: 1;
      }
  }

  img {
    width: 100%;
    height: auto;
  }
`

const Title = styled.h3`
  text-align: center;
`

const Date = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 4em;
  color: ${colors.gray};
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
