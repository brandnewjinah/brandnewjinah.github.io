import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

//import components
import Burger from "./burger"

//import styles and assets
import styled from "styled-components"

interface Props {}

const Header = ({ data }: Props) => {
  const query = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Container>
      <Link to="/">
        <Logo>
          <h6>{query.site.siteMetadata.title}</h6>
        </Logo>
        {/* <Testing>{query.site.siteMetadata.title}</Testing> */}
      </Link>
      <Burger />
    </Container>
  )
}

const Container = styled.header`
  /* background-color: pink; */
  width: 100%;
  max-width: 1024px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 2em;
  margin: 0 auto;
`

const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 5px;
  content: "";
  width: 200px;
  margin-left: -100px;

  h6 {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.125rem;
    text-align: center;
  }
`

export default Header
