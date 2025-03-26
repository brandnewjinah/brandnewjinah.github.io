import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import lottie from "lottie-web";

const P002 = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./json/p004.json"),
    });
  }, []);

  return (
    <Wrapper>
      <div className="container" ref={container}></div>
    </Wrapper>
  );
};

const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  ${Flex}
  flex-direction: column;
  width: 100%;
  height: 240px;
  overflow: hidden;
`;

export default P002;
