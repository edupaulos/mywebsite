import styled from "@emotion/styled";
import { WrapperProps } from "./Box.types";

export const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border-radius: 5rem;
  padding: 6.3rem;
`;

export const Title = styled.h2`
display: flex;
font-weight: 900;
letter-spacing: -0.05em;
font-size: 6.4rem;
`;

export const Text = styled.p`
display:flex;
font-size: 3.2rem;
`


