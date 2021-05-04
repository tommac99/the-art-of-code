import styled, { keyframes } from "styled-components";
import { ThemeColor } from "../../constants";

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div<{ position: string | null }>`
  position: relative;
  z-index: 2;
  width: 320px;
  height: 200px;
  background: ${ThemeColor.background.gray};
  border-radius: 20px;
  transform: scale(0.98);
  opacity: 0;
  box-shadow: 0 0 0 #c4c4c4, 0 0 0 #ffffff;
  transition: opacity 200ms ease-in-out, transform 600ms ease-in-out,
    box-shadow 800ms 200ms ease-in-out;

  &:hover {
    box-shadow: 10px 10px 30px #c4c4c4, -10px -10px 30px #ffffff;
  }

  & > .link {
    width: 320px;
    height: 200px;
    text-decoration: none;
  }

  & .card-content {
    width: 320px;
    padding: 20px;
    opacity: 0;
    animation: ${appear} 600ms ease-in-out forwards;
  }

  .image {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${(props) => (props.position ? props.position : "center")};
    border-radius: 20px;
    opacity: 0;
    transform: scale(1);
    transition: transform 400ms 1000ms ease-in-out,
      opacity 1000ms 200ms ease-in-out;
  }

  .image-overlay {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 320px;
    height: 200px;
    border-radius: 20px;
    background: ${ThemeColor.background.gray};
    opacity: 0.7;
    transition: opacity 600ms 800ms ease-in-out;
  }

  .btns {
    display: flex;
  }

  .btn-grad {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    z-index: 1;
    margin: 10px;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    background-image: linear-gradient(
      to right,
      #232526 0%,
      #414345 51%,
      #232526 100%
    );
    cursor: pointer;
    opacity: 0;
    text-decoration: none;
    box-shadow: 0px 0px 0px #c4c4c4, -0px -0px 0px #ffffff;
    transition: opacity 600ms 1200ms ease-in-out,
      box-shadow 600ms 1200ms ease-in-out, background-position 150ms ease-in-out;
  }

  .github {
    width: 60px;
    padding: 10px;
    margin-left: 0;

    &.disabled {
      background: ${ThemeColor.background.gray};
      cursor: not-allowed;
    }
  }

  .btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;
