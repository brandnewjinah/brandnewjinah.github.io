import React from "react"
import { Link } from "gatsby"

//import components
import Layout from "../../components/layout"
import TwoCol from "../../components/twoCol"

//import styles and assets
import styled from "styled-components"
import colors from "../../components/colors"
import LayoutGif from "../../images/airbnb_layout.gif"
import MapGif from "../../images/airbnb_map.gif"
import FilterGif from "../../images/airbnb_filter.gif"
import ResGif from "../../images/airbnb_res.gif"
import Github from "../../images/svg/github.svg"

const Airbnb = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Header>
          <h2>Airbnb Clone</h2>
          <p>React, Redux, Styled-components</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#9e9e9e",
            }}
          >
            <Github width={16} height={16} />
            <a
              href="https://github.com/brandnewjinah/Airbnb_Site_Clone"
              target="_blank"
            >
              source code
            </a>
          </div>
        </Header>
        <Hero>
          <iframe
            width="640"
            height="390"
            src="https://www.youtube.com/embed/IhYx9S43GYw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Hero>
        <TextSection>
          <p>
            Airbnb site clone project, as a part of the WeCode bootcamp
            curriculum. I collaborated with 2 other front-end developers and 2
            back-end developers. I chose to clone this site because it had a lot
            of features that are widely used in modern.
          </p>
        </TextSection>

        <Section>
          <h4>What I Implemented</h4>
          <Wrapper style={{ backgroundColor: "#F9F8F7" }}>
            <TwoCol
              overline="01"
              img={LayoutGif}
              alt="airbnb layout"
              title="Search List View"
            >
              <ul>
                <li>
                  Implemented Axios and redux to fetch data and search state
                </li>
                <li>Created custom image slider</li>
                <li>Created responsive layout</li>
                <li>Implemented pagination</li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper>
            <TwoCol
              overline="02"
              img={FilterGif}
              alt="airbnb map"
              title="Search Filter"
              right={true}
            >
              <ul>
                <li>
                  Created filter method that takes checked items as query
                  strings and rerenders page
                </li>
                <li>Created a method to clear all checked items</li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper style={{ backgroundColor: "#F9F8F7" }}>
            <TwoCol
              overline="03"
              img={MapGif}
              alt="airbnb map"
              title="Search Map View"
            >
              <ul>
                <li>
                  Implemented Google Map view with custom marker and overlay
                  view components
                </li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper>
            <TwoCol
              overline="04"
              img={ResGif}
              alt="airbnb reservation"
              title="Reservation"
              right={true}
            >
              <ul>
                <li>Created layout for the reservation page</li>
                <li>Added method to choose payment type</li>
                <li>
                  Worked with backend to implement currency conversion method
                </li>
              </ul>
            </TwoCol>
          </Wrapper>
        </Section>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  /* margin: 6vw auto; */
`

const Header = styled.header`
  text-align: center;

  h2 {
    margin-bottom: 0.25em;
  }

  p {
    font-size: 0.95rem;
    color: ${colors.lightgray};
  }

  a {
    font-size: 0.875rem;
    color: #9e9e9e;
    margin-left: 0.3em;
    text-decoration: underline;
  }
`

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin: 4em 0;
`

const TextSection = styled.section`
  max-width: 840px;
  margin: 2em auto;
  padding: 0 2em;
`

const Section = styled.section`
  /* padding: 0 2em; */
  margin: 4em 0;
  h4 {
    text-align: center;
    margin: 4em 0 3em 0;
  }
`
const HLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eaeaea;
`
const Test = styled.section``

const Wrapper = styled.div`
  padding: 4em;
  display: flex;
  justify-content: center;
`

export default Airbnb
