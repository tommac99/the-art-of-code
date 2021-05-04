import styled, { keyframes } from "styled-components";
import { ThemeColor } from "../../constants";

const float = keyframes`
  0% {
    transform: translateY(0px)
  }
  100% {
    transform: translateY(-10px)
  }
`;

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  90% {
    opacity: 1;
    transform: translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const appearMobile = keyframes`
  0% {
    opacity: 0;
    transform: translateY(160px);
  }
  90% {
    opacity: 1;
    transform: translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const magic = keyframes`
  0% {
    color: ${ThemeColor.background.gray};
    text-shadow: 0px 0px 0px #c4c4c4, 0px 0px 0px #ffffff;
  }
  20% {
    color: ${ThemeColor.background.light};
    text-shadow: 5px 5px 15px #c4c4c4, -5px -5px 15px #ffffff;
  },
  100% {
    color: ${ThemeColor.background.light};
    text-shadow: 5px 5px 15px #c4c4c4, -5px -5px 15px #ffffff;
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 200px;
  opacity: 0;
  transform: translateY(200px);
  animation: ${appear} 2000ms 2000ms ease-in-out forwards;

  @media (max-width: 768px) {
    height: 160px;
    transform: translateY(160px);
    animation: ${appearMobile} 2000ms 2000ms ease-in-out forwards;
  }
`;

type IconType = {
  top: number;
  right: number;
  speed: number;
  index: number;
};

export const Icon = styled.div<IconType>`
  margin-top: ${(props) => props.top}px;
  margin-right: ${(props) => props.right}px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: translateY(0px) scale(1);
  background: ${ThemeColor.background.gray};
  /* animation: ${float} ${(props) =>
  props.speed}ms ease-in-out infinite alternate; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & > i {
    font-size: 40px;
    color: ${ThemeColor.background.light};
    text-shadow: 5px 5px 15px #c4c4c4, -5px -5px 15px #ffffff;
    animation: ${magic} 8000ms ${(props) => props.index * 200}ms ease-in-out
      infinite alternate;
  }
`;
