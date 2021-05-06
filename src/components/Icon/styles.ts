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

export const Root = styled.div<{ index: number; parentIndex: number }>`
  width: 100px;
  height: 100px;
  background: linear-gradient(
    -120deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.4)
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 8px rgba(21, 33, 45, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transform: scale(1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  opacity: 0;
  animation: ${bounceIn} 500ms
    ${(props) => props.index * (400 + 1000 * props.parentIndex)}ms ease-in-out
    forwards;

  &:hover {
    background: linear-gradient(
      -120deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.5)
    );
    box-shadow: 0 8px 12px rgba(21, 33, 45, 0.16);
  }

  &:active {
    transform: scale(0.99);
    box-shadow: 0 4px 8px rgba(21, 33, 45, 0.24);
  }

  & > i {
    font-size: 50px;
    margin-bottom: 10px;
    color: #fff;
    /* background: linear-gradient(-120deg, #6b6bac, #df796b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
`;
export const Empty = styled.div<{ index: number; parentIndex: number }>`
  width: 100px;
  height: 100px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  opacity: 0;
  animation: ${bounceIn} 500ms
    ${(props) => props.index * (400 + 1000 * props.parentIndex)}ms ease-in-out
    forwards;
`;
