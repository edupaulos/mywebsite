"use client";

import { Wrapper, Title, Text } from "./Box.styles";
import { Box } from "./Box.types";

const Box = (props: Box) => {
  const { width, height, color, asBagde = false} = props;

  return (
    <Wrapper width={width} height={height} color={color} asBagde={asBagde}>
      <Title >Test. </Title>
      <Text>Test p</Text>
    </Wrapper>
  );
};
export default Box;
