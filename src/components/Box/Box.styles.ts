import styled from "@emotion/styled";
import { WrapperProps } from "./Box.types";

export const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border-radius: 5rem;
`;

export const Title = styled.h2``;
