import styled, { keyframes } from "styled-components";
import { ThemeColor } from "../../constants";

const bounceIn = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.96) translate3d(0,0,0);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.02);
  }
  80%{
    opacity: 1;
    transform: scale(0.98);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
`;

export const GridItemContainer = styled.div<{ index: number }>`
  width: 280px;
  height: 280px;
  background: linear-gradient(
    -120deg,
    ${ThemeColor.background.dark},
    ${ThemeColor.background.darkest}
  );
  box-shadow: 0 4px 8px rgba(49, 49, 49, 0.16);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  opacity: 0;
  transform: scale(0.3) translate3d(0, 0, 0);
  animation: ${bounceIn} 400ms ${({ index }) => index * 400}ms ease-in-out
    forwards;
`;
