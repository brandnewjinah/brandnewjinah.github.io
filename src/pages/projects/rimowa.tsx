import React from "react"
import { Link } from "gatsby"

//import components
import Layout from "../../components/layout"
import TwoCol from "../../components/twoCol"

//import styles and assets
import styled from "styled-components"
import colors from "../../components/colors"
import RegGif from "../../images/rimowa_register.gif"
import SigninGif from "../../images/rimowa_signin.gif"
import HomeGif from "../../images/rimowa_homepage.gif"
import CheckoutGif from "../../images/rimowa_checkout.gif"
import Github from "../../images/svg/github.svg"

const Rimowa = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Header>
          <h2>Rimowa Clone</h2>
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
              href="https://github.com/brandnewjinah/Rimowa_Clone"
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
            src="https://www.youtube.com/embed/a3mt9oeqr9Q"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Hero>
        <TextSection>
          <p>
            RIMOWA ecommerce site clone project, as a part of the WeCode
            bootcamp curriculum. I collaborated with 2 other front-end
            developers and 2 back-end developers. I chose to clone this site
            because I wanted to learn and implement practical ecommerce
            practices.
          </p>
        </TextSection>

        <Section>
          <h4>What I Implemented</h4>
          <Wrapper style={{ backgroundColor: "#F9F8F7" }}>
            <TwoCol
              overline="01"
              img={RegGif}
              alt="rimowa registration"
              title="Signup"
            >
              <ul>
                <li>
                  Created<code>validate</code>method to check for client side
                  errors.
                </li>
                <li>
                  Used <code>try..catch</code> statement to handle server side
                  errors
                </li>
                <li>
                  Created reusable dropdown, input field and button components
                </li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper>
            <TwoCol
              overline="02"
              img={SigninGif}
              alt="rimowa registration"
              title="Login"
              right={true}
            >
              <ul>
                <li>Stored JWT to localStorage</li>
                <li>
                  Used jwt-decode library to decode user info and sent it to
                  header
                </li>
                <li>Displayed user name on header upon signin</li>
                <li>Creaed logout method to delete JWT</li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper style={{ backgroundColor: "#F9F8F7" }}>
            <TwoCol
              overline="03"
              img={HomeGif}
              alt="rimowa registration"
              title="Homepage"
            >
              <ul>
                <li>
                  Created full page layout and implemented animation on scroll
                </li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper>
            <TwoCol
              overline="04"
              img={CheckoutGif}
              alt="rimowa registration"
              title="Checkout"
              right={true}
            >
              <ul>
                <li>Implemented redux to access and update the store</li>
                <li>
                  Added functionality to update cart and reflect to the
                  calulation
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

  @media (max-width: 850px) {
    padding: 2em 0;
  }
`

export default Rimowa
