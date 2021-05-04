import styled, { keyframes } from "styled-components";
import { ThemeColor } from "../../constants";
import { mediaQueries } from "../../utils";

const fadeIn = keyframes`
  0 {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
    min-width: 340px;
    height: 100%;
    max-height: 280px;
    border-radius: 10px;
    background: ${ThemeColor.background.light};
    font-family: "Roboto Slab";
    font-weight: 500;

    & > .text-group {
      opacity: 0;
      text-align: center;
    }

    & > .text-group:first-child {
      animation: ${fadeIn} 300ms 400ms ease-in-out forwards;
    }

    & > .text-group:nth-child(2) {
      animation: ${fadeIn} 300ms 800ms ease-in-out forwards;
    }
    & > .text-group:nth-child(3) {
      animation: ${fadeIn} 300ms 1200ms ease-in-out forwards;
    }
    & > .text-group:nth-child(4) {
      animation: ${fadeIn} 300ms 1600ms ease-in-out forwards;
    }
    & > .text-group:nth-child(5) {
      margin-top: 10px;
      font-size: 20px;
      color: #313131;
      animation: ${fadeIn} 300ms 2000ms ease-in-out forwards;
    }
    & > .text-group:nth-child(6) {
      margin-top: 10px;
      font-size: 40px;
      animation: ${fadeIn} 300ms 2400ms ease-in-out forwards;

      & > a {
        margin: 0 10px;
        cursor: pointer;
        color: #313131;

        &:hover {
          color: rgba(59, 142, 165, 1);
        }
      }
    }
  }
`;
