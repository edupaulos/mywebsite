"use client";

import { Wrapper, Title } from "./Box.styles";
import { Box } from "./Box.types";

const Box = (props: Box) => {
  const { width, height, color } = props;

  return (
    <Wrapper width={width} height={height} color={color}>
      <Title>Test</Title>
      <p>Test p</p>
    </Wrapper>
  );
};

export default Box;
