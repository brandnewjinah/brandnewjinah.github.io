import React from "react"
import { Link } from "gatsby"

//import components
import Layout from "../../components/layout"
import TwoCol from "../../components/twoCol"

//import styles and assets
import styled from "styled-components"
import colors from "../../components/colors"

import Github from "../../images/svg/github.svg"

const UIComp = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Header>
          <h2>UI Components</h2>
          <p>React Native, TypeScript</p>
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
              href="https://github.com/brandnewjinah/react-native-ui"
              target="_blank"
            >
              source code
            </a>
          </div>
        </Header>

        <TextSection>
          <p>
            With my background in UX/UI design, I wanted to build customizable
            UI components that are easy to implement and elegantly designed. The
            list will keep growing and once I have enough components to share,
            I'll figure out a way to distrubute them properly.
          </p>
        </TextSection>

        <Section>
          <h4>What I Implemented</h4>
          <Wrapper style={{ backgroundColor: "#F9F8F7" }}>
            <TwoCol
              overline="01"
              img="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/Buttons.png"
              alt="rimowa registration"
              title="Buttons"
              mobile={true}
            >
              <ul>
                <li>You can choose shape</li>
                <li>You can have left or right arrows</li>
                <li>You can make button smaller</li>
                <li>You can disable button</li>
                <li>You can insert icons inside the button</li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper>
            <TwoCol
              overline="04"
              img="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/ListAvatar%402x.png"
              alt="rimowa registration"
              title="Lists"
              right={true}
              mobile={true}
            >
              <ul>
                <li>A list can be text only or with an avatar</li>
                <li>
                  Texts can have primary, secondary, overline, subtext, or meta.
                </li>
                <li>
                  Avatar can have an image, user initial or a default icon
                </li>
                <li>You can have unread property for messaging</li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper style={{ backgroundColor: "#F9F8F7" }}>
            <TwoCol
              overline="03"
              img="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/Input.png"
              alt="rimowa registration"
              title="Input"
              mobile={true}
            >
              <ul>
                <li>Input can have default, pill or underline shape</li>
                <li>You can insert prefix inside the input</li>
                <li>You can customize active state color</li>
                <li>You can disable input</li>
                <li>You can pass error message</li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper>
            <TwoCol
              overline="02"
              img="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/CardLayout2%402x.png"
              alt="rimowa registration"
              title="Cards"
              right={true}
              mobile={true}
            >
              <ul>
                <li>
                  Card componet is a highly customizable container where you can
                  insert other components to compose a layout.
                </li>
                <li>You can insert list component</li>
                <li>You can insert text, image or image slider</li>
                <li>You can add like componet</li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper style={{ backgroundColor: "#F9F8F7" }}>
            <TwoCol
              overline="03"
              img="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/ScrollMenu.gif"
              alt="rimowa registration"
              title="Scroll Menu"
              mobile={true}
            >
              <ul>
                <li>
                  You can pass data in an array form, set item received from
                  onSelect to the state, and pass that item back as selected.
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
  @media (max-width: 850px) {
    padding: 3em 0;
  }
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
  margin: 4em 0 0;
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

export default UIComp
