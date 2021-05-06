import styled from "styled-components";
import { ThemeColor } from "../../../constants";

export const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 1;
  text-align: center;
  font-weight: 700;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    rgba(59, 142, 165, 1) 0%,
    rgba(79, 162, 185, 1) 51%,
    rgba(59, 142, 165, 1) 100%
  );
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;
  transition: background-position 150ms ease-in-out;

  &:hover {
    background-position: right center; /* change the direction of the change here */
  }

  &.disabled {
    background: ${ThemeColor.background.gray};
    cursor: not-allowed;
  }
`;
