import React from "react"
import { Link } from "gatsby"

//import components
import Layout from "../components/layout"
import Project from "../components/project"

//import styles and assets
import styled from "styled-components"
import colors from "../components/colors"

//data
const Skills = [
  {
    id: 0,
    title: "HTML",
    desc: "I can create a semantic and a clean layout with HTML5",
  },
  {
    id: 1,
    title: "CSS",
    desc: "I can create responsive layouts with proper use of selectors",
  },
  {
    id: 2,
    title: "JavaScript",
    desc:
      "I know modern javascript and DOM.  I'm actively studying to strengthen the knowledge",
  },
  {
    id: 3,
    title: "TypeScript",
    desc:
      "I started building open-source UI components for React Native in Typescript",
  },
  {
    id: 4,
    title: "React",
    desc:
      "I can write functional components. I understand the lifecycle and virtual DOM",
  },
  {
    id: 5,
    title: "React Native",
    desc:
      "I started building open-source UI components for React Native with Typescript",
  },
  {
    id: 6,
    title: "Redux",
    desc:
      "I understand the Redux flow and I like implementing with Ducks pattern",
  },
  {
    id: 7,
    title: "Git",
    desc:
      "I'm familiar with Git and Github. I'm actively studying to master Git",
  },
  {
    id: 8,
    title: "UX/UI Design",
    desc: "I have more than 10 years of experience in UX/UI design",
  },
  {
    id: 9,
    title: "Accessibility",
    desc:
      "I understand the importance of accessibility and I'm constantly learning",
  },
]

const Projects = ({ data }) => {
  return (
    <Layout>
      <Container>
        <p style={{ fontSize: "1.25rem", lineHeight: "2.5rem" }}>
          A front-end developer with more than 10 years of experience in UX/UI
          design with passion for building great products and eagerness to
          learn. I hope to bring effective communication skills with
          professionalism and strong work ethics. I’m currently obsessed with
          building open source UI components and mastering Git.
        </p>
      </Container>
      <Section>
        <div style={{ paddingLeft: "2em" }}>
          <h6>Skills</h6>
        </div>
        {Skills.map((item, index) =>
          index % 2 ? (
            <Grid style={{ backgroundColor: "#fafafa" }}>
              <div>
                <p>{item.title}</p>
              </div>
              <div>
                <p style={{ color: colors.gray }}>{item.desc}</p>
              </div>
            </Grid>
          ) : (
            <Grid>
              <div>
                <p>{item.title}</p>
              </div>
              <div>
                <p style={{ color: colors.gray }}>{item.desc}</p>
              </div>
            </Grid>
          )
        )}
      </Section>
    </Layout>
  )
}

const Container = styled.section`
  max-width: 1024px;
  padding: 2em;
  margin: 0 auto;
`
const Section = styled.section`
  max-width: 1024px;
  padding: 2em 0;
  margin: 0 auto;

  h6 {
    margin-bottom: 1em;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 0.5em 0;

  div {
    margin-left: 2em;
    padding-right: 2em;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 1em 0;
  }
`

export default Projects
