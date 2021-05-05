import styled, { keyframes } from "styled-components";
import { ThemeColor } from "../../constants";

const bounceIn = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.3) translate3d(0,0,0);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.1);
  }
  80%{
    opacity: 1;
    transform: scale(0.89);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
`;

export const Container = styled.div<{ position: string | null }>`
  position: relative;
  z-index: 2;
  width: 320px;
  min-height: 480px;
  background: ${ThemeColor.background.dark};
  border-radius: 20px;
  transform: scale(0.98);
  padding: 10px;
  opacity: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: ${bounceIn} 600ms ease-in-out forwards;

  & .card-content {
    width: 320px;
    padding: 20px;
    opacity: 0;
  }

  .image {
    position: relative;
    width: 100%;
    height: 180px;
    object-fit: cover;
    object-position: ${(props) => (props.position ? props.position : "center")};
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }

  .content {
    margin: 10px 0 10px 0;
    padding: 10px;
    padding-bottom: 80px;

    & > span {
      text-align: left;
      color: ${ThemeColor.background.gray};
    }

    & > div:last-child {
      margin-top: 10px;
      color: ${ThemeColor.background.light};
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
    }
  }

  .btns {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
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
      rgba(59, 142, 165, 1) 0%,
      rgba(79, 162, 185, 1) 51%,
      rgba(59, 142, 165, 1) 100%
    );
    cursor: pointer;
    text-decoration: none;
    transition: background-position 150ms ease-in-out;
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
