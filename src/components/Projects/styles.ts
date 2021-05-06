import styled from "styled-components";
import { ThemeColor } from "../../constants";
import { mediaQueries } from "../../utils";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .arrow {
    box-shadow: inset 1px 1px 0px rgb(0 0 0), inset -1px -1px 0px rgb(0 0 0);
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    width: 40px;
    height: 40px;
    cursor: pointer;
    top: 190px;
    transform: translate(0, 0);
    background: ${ThemeColor.background.gray};
    border: none;

    ${mediaQueries("md")`
      top: 50%;
      transform: translate(0, -50%);
    `};

    &:active {
      transform: scale(0.99) translate(0, 2px);

      ${mediaQueries("md")`
        transform: scale(0.99) translate(0, -50%);
      `};
    }
  }

  .left-arrow {
    left: 0;

    ${mediaQueries("md")`
      left: 8px;
    `};
  }

  .right-arrow {
    right: 0;

    ${mediaQueries("md")`
      right: 8px;
    `};
  }

  .carousel-container {
    width: 100%;
  }
  .project-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`;
