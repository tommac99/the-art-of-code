import styled, { keyframes } from "styled-components";
import { ThemeColor } from "../../constants";

const dropDown = keyframes`
  0% {
    transform: translateY(calc(-50vh - 200px))
  }
  100% {
    transform: translateY(0px)
  }
`;

const slideInRight = keyframes`
  0% {
    transform: translateX(calc(400px))
  }
  100% {
    transform: translateX(0px)
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(calc(-50vh - 200px));
  animation: ${dropDown} 600ms 1600ms ease-in-out forwards;

  @media (max-width: 768px) {
    transform: translateX(400px);
    animation: ${slideInRight} 600ms 1600ms ease-in-out forwards;
  }

  .arrow {
    box-shadow: 4px 4px 8px #c4c4c4, -4px -4px 8px #ffffff;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    width: 40px;
    height: 40px;
    cursor: pointer;
    top: 50%;
    transform: translate(0, -50%);
    background: ${ThemeColor.background.gray};
    border: none;

    &:active {
      transform: scale(0.99) translate(0, -50%);

      /* @media (max-width: 768px) {
        transform: scale(0.99) translate(0);
      } */
    }

    @media (max-width: 768px) {
      box-shadow: none;
    }

    /* @media (max-width: 768px) {
      top: 320px;
      transform: scale(1) translate(0);
      width: 70px;
      height: 70px;

      & > div {
        width: 70px !important;
        height: 70px !important;
      }

      & svg {
        width: 70px !important;
        height: 70px !important;
      }
    } */
  }

  .left-arrow {
    left: 8px;

    /* @media (max-width: 768px) {
      left: 80px;
    } */
  }

  .right-arrow {
    right: 8px;

    /* @media (max-width: 768px) {
      right: 80px;
    } */
  }

  .carousel-container {
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 20px;
      height: 100%;
      background: linear-gradient(
        90deg,
        ${ThemeColor.background.gray},
        transparent
      );

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  .project-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0 120px 0;

    @media (max-width: 768px) {
      padding: 40px 0 80px 0;
    }
  }

  .slide.selected .project-slide > div {
    box-shadow: 10px 10px 30px #c4c4c4, -10px -10px 30px #ffffff;
    transform: scale(1);
    opacity: 1;

    & .image {
      opacity: 1;
      transform: scale(1);
    }

    & .image-overlay {
      opacity: 0;
    }

    & .btn-grad {
      opacity: 1;
      box-shadow: 4px 4px 6px #c4c4c4, -4px -4px 6px #ffffff;
    }
  }
`;
