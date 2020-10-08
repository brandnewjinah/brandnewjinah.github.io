import React from "react"
import { Link } from "gatsby"

//import styles and assets
import styled from "styled-components"
import colors from "../colors"

interface Props {
  open?: boolean
}

const Links = ({ open }: Props) => {
  return (
    <Container open={open}>
      <Overlay>
        <Ul>
          <li>
            <Link to="/blog/">
              <Menu>Blog</Menu>
            </Link>
          </li>
          <li>
            <Link to="/projects/">
              <Menu>Projects</Menu>
            </Link>
          </li>
          <li>
            <Link to="/about/">
              <Menu>About</Menu>
            </Link>
          </li>
          <li>
            <a href="https://github.com/brandnewjinah" target="_blank">
              <Menu>Github</Menu>
            </a>
          </li>
        </Ul>
      </Overlay>
    </Container>
  )
}

const Container = styled.header`
  margin: 0 auto;
  width: 100%;

  @media (max-width: 850px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${({ open }) => (open ? "scale(1)" : "scale(0)")};
  }
`

const Overlay = styled.div`
  @media (max-width: 850px) {
    background-color: #fff;
    border-radius: 50%;
    width: 200vw;
    height: 200vh;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    transition: all 0.4s ease-in-out;
  }
`

const Ul = styled.ul`
  list-style: none;
  text-align: right;

  li {
    float: none;
    display: inline-block;

    &:nth-child(-n + 2) {
      float: left;
      margin-right: 40px;
    }

    &:nth-child(n + 3) {
      margin-left: 40px;
    }
  }

  @media (max-width: 850px) {
    text-align: center;
    li {
      float: none;
      display: block;

      &:nth-child(-n + 2) {
        float: none;
        margin: 20px 0;
      }

      &:nth-child(n + 3) {
        float: none;
        margin: 20px 0;
      }
    }
  }
`

const Menu = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${colors.lightgray};

  @media (max-width: 850px) {
    font-size: 1.25rem;
  }
`
export default Links
