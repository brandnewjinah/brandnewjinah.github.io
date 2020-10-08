import React from "react"

//import styles and assets
import styled from "styled-components"
import colors from "./colors"

interface Props {
  sub?: string
  title?: string
  excerpt?: string
  align?: string
}

const oneCol = ({ sub, title, excerpt, align }: Props) => {
  return (
    <div>
      {align === "left" ? (
        <Left>
          <p className="overline">{sub}</p>
          <h4>{title}</h4>
          <p>{excerpt}</p>
        </Left>
      ) : (
        <Center>
          <p className="overline">{sub}</p>
          <h4>{title}</h4>
          <p>{excerpt}</p>
        </Center>
      )}
    </div>
  )
}

const Center = styled.div`
  width: 100%;
  text-align: center;

  .overline {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.105em;
  }

  h4 {
    margin-bottom: 0.5em;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`
const Left = styled.div`
  width: 100%;
  padding: 1.5em 1.5em 1.5em 0;
  /* color: ${colors.darkgray}; */

  .overline {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.105em;
  }

  h4 {
    margin-bottom: 0.5em;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`

export default oneCol
