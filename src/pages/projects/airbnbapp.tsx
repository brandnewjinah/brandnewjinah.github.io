import React, { useEffect } from "react"
import { Link } from "gatsby"
import Prism from "prismjs"
import Img from "gatsby-image"

//import components
import Layout from "../../components/layout"
import TwoCol from "../../components/twoCol"

//import styles and assets
import styled from "styled-components"
import colors from "../../components/colors"
import LoginGif from "../../images/airapp_login.gif"
import HomeGif from "../../images/airapp_home.gif"
import ListGif from "../../images/airapp_list.gif"
import HostGif from "../../images/airapp_host.gif"
import MessageGif from "../../images/airapp_message.gif"
import Github from "../../images/svg/github.svg"

const AirbnbApp = ({ data }) => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout>
      <Container>
        <Header>
          <h2>Airbnb App Clone</h2>
          <p>React Native, Redux, Socket.IO</p>
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
              href="https://github.com/brandnewjinah/react-native-airbnb-clone"
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
            src="https://www.youtube.com/embed/RHxPceOgMB0"
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
              img={LoginGif}
              alt="airbnb app signin"
              title="Signup and Login"
              mobile={true}
            >
              <ul>
                <li>Created reusable input and form component</li>
                <li>Created reusable button component</li>
                <li>Implemented Yup and Joi for error handling</li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper>
            <TwoCol
              overline="02"
              img={HomeGif}
              alt="airbnb app home"
              title="Homepage"
              right={true}
              mobile={true}
            >
              <ul>
                <li>Created search filter</li>
                <li>Implemented Wix calendar picker library</li>
                <li>Created counter component</li>
                <li>Implemented redux to store user selected data</li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper style={{ backgroundColor: "#F9F8F7" }}>
            <TwoCol
              overline="03"
              img={ListGif}
              alt="airbnb app list"
              title="List and Details"
              mobile={true}
            >
              <ul>
                <li>Created reusable card component</li>
                <li>Implemented Google maps</li>
                <li>Created custom image slider</li>
              </ul>
            </TwoCol>
          </Wrapper>

          <Wrapper>
            <TwoCol
              overline="04"
              img={HostGif}
              alt="airbnb app host"
              title="Host"
              right={true}
              mobile={true}
            >
              <ul>
                <li>Enabled adding image using native ImagePicker</li>
                <li>Enabled getting user's current location</li>
              </ul>
            </TwoCol>
          </Wrapper>
          <Wrapper style={{ backgroundColor: "#F9F8F7" }}>
            <TwoCol
              overline="04"
              img={MessageGif}
              alt="airbnb app messaging"
              title="Messaging"
              mobile={true}
            >
              <ul>
                <li>Creating socket connection</li>
                <li>Implemented live sending and receiving of messages</li>
              </ul>
            </TwoCol>
          </Wrapper>
        </Section>
        <Components>
          <h4>Features Componentized</h4>
          <p>
            Through this project, I learned the importance of reusable
            components. I tried to document them so that I can expand them into
            more projects later.
          </p>
          <Section>
            <h6>Buttons</h6>
            <img
              src="https://raw.githubusercontent.com/brandnewjinah/react-native-airbnb-clone/feature/detail/airbnb/app/assets/Buttons2x.png"
              alt="butotn"
            />
            <CodeBlock>
              <pre>
                <code className="language-javascript">{`import * as Button from "../components/Button.js";
  <Button.BtnContain
    icon="search"
    label="Next"
    labelcolor={colors.white}
    color={colors.red}
    size="small"
    disabled={false}
    onPress={() => onNavigate()}
  />`}</code>
              </pre>
            </CodeBlock>
            <h6>Lists</h6>
            <img
              src="https://raw.githubusercontent.com/brandnewjinah/react-native-airbnb-clone/feature/detail/airbnb/app/assets/List2x.png"
              alt="butotn"
            />
            <CodeBlock>
              <pre>
                <code className="language-javascript">{`import * as List from "../components/List.js";

<ListItem.Default
  title="Title"
  secondary="Secondary Text"
  containedicon="location"
  onPress={() => onNavigate(item.title)}
/>

<List.UserList
  title="User Name"
  secondary="Secondary Text"
  image={userimage}
  meta={item.dates}
  onPress={() => handleNavigation(item)}
  RightActions={() => (
    <DeleteItem onPress={() => handleDelete(item)} />
  )}
/>`}</code>
              </pre>
            </CodeBlock>
            <h6>Cards</h6>
            <img
              src="https://raw.githubusercontent.com/brandnewjinah/react-native-airbnb-clone/feature/detail/airbnb/app/assets/Cards2x.png"
              alt="butotn"
            />
            <CodeBlock>
              <pre>
                <code className="language-javascript">{`import * as Cards from "../components/Cards.js";

<Cards.Image
  image={image}
  sub="Subheader"
  title="Title"
  secondary="Secondary text"
  action="View More"
  onPress={() => console.log(item)}
/>`}</code>
              </pre>
            </CodeBlock>
          </Section>
        </Components>
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

const Wrapper = styled.div`
  padding: 4em;
  display: flex;
  justify-content: center;
`
const Components = styled.section`
  max-width: 840px;
  margin: 2em auto;
  padding: 0 2em;

  h4 {
    text-align: center;
    margin-bottom: 1em;
  }

  h6 {
    margin-bottom: 1em;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`

const CodeBlock = styled.section`
  background-color: #f9f8f7;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 840px;
  margin: 2em auto;
`

export default AirbnbApp
