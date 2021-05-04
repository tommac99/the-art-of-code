import styled, { keyframes } from "styled-components";

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

export const Container = styled.div`
  .container {
    display: grid;
    grid-template-columns: 260px 260px;
    grid-template-rows: 260px 260px;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    touch-action: none;
    width: 560px;
  }

  .dropzone {
    width: 260px;
    height: 260px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 16px 24px rgba(0, 0, 0, 0.16);
  }
`;

export const GridIcon = styled.div<{ index: number }>`
  padding: 20px;
  width: 130px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 20px;
  opacity: 0;
  animation: ${bounceIn} 400ms ${(props) => props.index * Math.random()}ms
    ease-in-out forwards;

  .grid-item-content {
    width: 90px;
    height: 90px;
    background: #08e;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.9)
    );
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-content: center;
    color: #313131;
    align-items: center;
    border-radius: 20px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 16px 24px rgba(0, 0, 0, 0.1);
    transition: transform 100ms ease-in-out;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;
