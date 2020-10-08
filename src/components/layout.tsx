import React from "react"

//import components
import Header from "./header/header"
import Footer from "./footer"

//import styles and assets
import styled from "styled-components"
import GlobalStyle from "./globalStyle"

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Layout

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 3vw;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`

const Main = styled.main`
  padding: 5em 0;
`
