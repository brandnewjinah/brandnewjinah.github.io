import React, { useState } from "react"

//import styles and assets
import styled from "styled-components"
import Links from "./links"

interface Props {}

const Burger = ({}: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Container open={open} onClick={() => setOpen(!open)}>
        <div />
      </Container>
      <Links open={open} />
    </>
  )
}

const Container = styled.div`
  width: 25px;
  height: 33px;
  position: absolute;
  top: 0;
  right: 2em;
  z-index: 1;
  display: none;
  /* background-color: #00ffff; */

  @media (max-width: 850px) {
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center;
  }

  div {
    width: 100%;
    height: 2px;
    background-color: #000;
    display: flex;
    align-content: center;
    justify-content: center;
    transition: all 0.4s ease;
    opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 2px;
      background-color: black;
      transition: all 0.4s ease;
    }

    &:before {
      opacity: 1;
      transform: ${({ open }) =>
        open ? "rotate(45deg)" : "rotate(0) translateY(-6px)"};
    }

    &:after {
      opacity: 1;
      transform: ${({ open }) =>
        open ? "rotate(-45deg)" : "rotate(0) translateY(6px)"};
    }
  }
`

export default Burger
