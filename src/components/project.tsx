import React from "react"
import { Link } from "gatsby"

//import components
import OneCol from "../components/oneCol"

//import styles and assets
import styled from "styled-components"

interface Props {}

const Projects = ({ data }: Props) => {
  return (
    <Container>
      <Grid>
        <div>
          <Link to="/projects/uicomp">
            <OneCol
              align="left"
              sub="mobile"
              title="UI Components"
              excerpt="UI components for React Native built with TypeScript and Expo"
            />
          </Link>
        </div>

        <div>
          <Link to="/projects/airbnbapp">
            <OneCol
              align="left"
              sub="mobile"
              title="Airbnb App Clone"
              excerpt="Airbnb App cloned using React Native, Expo and Socket.IO"
            />
          </Link>
        </div>

        <div>
          <Link to="/projects/airbnb">
            <OneCol
              align="left"
              sub="web"
              title="Airbnb Clone"
              excerpt="Airbnb site cloned using React, Redux and Google Maps API."
            />
          </Link>
        </div>

        <div>
          <Link to="/projects/rimowa">
            <OneCol
              align="left"
              sub="web"
              title="RIMOWA Clone"
              excerpt="Rimowa.com site cloned using React and Redux."
            />
          </Link>
        </div>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  div {
    &:nth-child(1) {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default Projects
