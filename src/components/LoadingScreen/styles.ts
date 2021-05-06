import styled, { keyframes } from "styled-components";
import { ThemeColor } from "../../constants";

const appear = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const Screen = styled.div`
  width: 100%;
  height: 100%;
  background: ${ThemeColor.background.light};
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    transform: scale(0);
    animation: ${appear} 500ms ease-in-out forwards;
  }
`;
