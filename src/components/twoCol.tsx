import React from "react"

//import styles and assets
import styled from "styled-components"
import colors from "./colors"

interface Props {
  img?: any
  alt?: string
  title?: string
  desc?: any
  right?: boolean
  overline?: string
  children?: any
  mobile?: boolean
}

const Details = ({
  img,
  alt,
  title,
  desc,
  right,
  overline,
  children,
  mobile,
}: Props) => {
  return (
    <>
      {right ? (
        <Container>
          <Description>
            {/* <div>
              <p className="overline">{overline}</p>
            </div> */}
            <h6>{title}</h6>
            <p>{children}</p>
          </Description>
          {mobile ? (
            <Image>
              <img src={img} alt={alt} style={{ maxHeight: "300px" }} />
            </Image>
          ) : (
            <Image>
              <img src={img} alt={alt} />
            </Image>
          )}
        </Container>
      ) : (
        <Container>
          {mobile ? (
            <Image className="rightImg">
              <img src={img} alt={alt} style={{  maxHeight: "300px" }} />
            </Image>
          ) : (
            <Image className="rightImg">
              <img src={img} alt={alt} />
            </Image>
          )}

          <Description className="rightDesc">
            {/* <div>
              <p className="overline">{overline}</p>
            </div> */}
            <h6>{title}</h6>
            <p>{children}</p>
          </Description>
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  max-width: 840px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 850px) {
    padding: 20px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #fafafa; */

  img {
    max-width: 100%;
  }

  @media (max-width: 850px) {
    grid-row: 1;
  }
`
const Description = styled.div`
  padding: 1em;
  /* background-color: #fafafa; */

  div {
    display: flex;
    align-items: center;
  }

  h6 {
    color: ${colors.black};
    margin-bottom: 20px;
  }

  p {
    color: ${colors.gray};
    font-size: 0.95rem;
  }

  .overline {
    font-size: 0.75rem;
  }

  .hline {
    flex: 1;
    height: 1px;
    background-color: #dadada;
  }

  @media (max-width: 850px) {
    padding-top: 2em;
  }
`

export default Details
