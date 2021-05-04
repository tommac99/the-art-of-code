import styled, { keyframes } from "styled-components";
import { ThemeColor } from "../../constants";
import { mediaQueries } from "../../utils";

const tipsy = keyframes`
  0 {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  20% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
  40% {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f7f9fe;

  .inner {
    width: 100%;
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .title {
    padding: 10px;
    border: 5px solid ${ThemeColor.text.primary};
    margin-top: 40px;
    margin-bottom: 40px;

    ${mediaQueries("md")`
      margin-bottom: 80px;
    `};
  }

  .content {
    position: relative;
    width: 100%;
    max-width: 560px;
    height: 100%;
    max-height: 280px;
    border-radius: 10px;
    background: ${ThemeColor.background.blue.main};
    box-shadow: 0 4px 8px rgba(131, 133, 145, 0.16);
    cursor: pointer;

    &:hover {
      background: ${ThemeColor.background.blue.dark};
    }

    &:hover .start {
      color: rgba(255, 255, 255, 1);
    }
  }

  .start {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 20px 25px rgba(49, 49, 49, 0.2),
      0 40px 60px rgba(49, 49, 49, 0.2);
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    vertical-align: center;
    text-decoration: none;
    letter-spacing: -3px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: color 160ms ease-in-out;

    ${mediaQueries("md")`
      font-size: 80px;
    `};

    &:hover {
      /* background: rgba(244, 158, 76, 1) !important; */
    }

    &:before,
    &:after {
      content: "";
      padding: 0.8em 0.9em;
      position: absolute;
      left: 50%;
      width: 100%;
      top: 50%;
      display: block;
      border: 15px solid red;
      transform: translateX(-50%) translateY(-50%) rotate(0deg);
      animation: 16s infinite ease-in-out ${tipsy};
    }

    &:before {
      border-color: #3b8ea5 #3b8ea5 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
      border-color: ${ThemeColor.background.blue.light}
        ${ThemeColor.background.blue.light} rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
      z-index: -1;
    }

    &:after {
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #3b8ea5 #3b8ea5;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)
        ${ThemeColor.background.blue.light} ${ThemeColor.background.blue.light};
      box-shadow: 25px 25px 25px rgba(46, 46, 49, 0.2);
    }
  }
`;
