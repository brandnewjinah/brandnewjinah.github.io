import React from "react"

//import styles and assets
import styled from "styled-components"
import colors from "./colors"

const Hero = () => {
  return (
    <Container>
      <h2>
        I'm a front end developer who came from a UX background. I’m currently
        obsessed with building UI components and mastering Git.
      </h2>
    </Container>
  )
}

const Container = styled.div`
  margin: 4em auto 6em;
  padding: 0 2em;
  max-width: 1024px;

  h2 {
    line-height: 4rem;
  }
`

export default Hero
