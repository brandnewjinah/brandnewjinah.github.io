import React from "react"

//import styles and assets
import styled from "styled-components"
import colors from "./colors"

const Footer = () => {
  return (
    <Container>
      <p>© 2020 Jinah Lee — I used Gatsby</p>
    </Container>
  )
}

const Container = styled.div`
  margin: 2em auto 4em;
  padding: 0 2em;
  max-width: 1024px;
  color: ${colors.gray};

  p {
    font-size: 0.75rem;
  }
`

export default Footer
