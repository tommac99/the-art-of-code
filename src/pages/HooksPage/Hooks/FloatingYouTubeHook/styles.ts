import styled from "styled-components";
import { ThemeColor } from "../../../../constants";

export const Content = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
  padding: 40px;
  border-radius: 20px;
  background: ${ThemeColor.background.dark};

  .github {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .yt {
    position: relative;
    width: 200px;
    height: 220px;
    padding: 10px;
    background: ${ThemeColor.background.light};
    cursor: pointer;
    border-radius: 10px;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      background-image: linear-gradient(
        -120deg,
        rgba(59, 142, 165, 0.99) 0%,
        rgba(79, 162, 185, 0.8) 51%,
        rgba(59, 142, 165, 0.99) 100%
      );
      opacity: 0;
      display: grid;
      justify-content: center;
      align-content: center;
      border-radius: 10px;
      transition: opacity 160ms ease-in-out;

      &:hover {
        opacity: 1;
      }

      & > i {
        font-size: 80px;
        color: ${ThemeColor.text.contrast};
      }
    }

    & img {
      border-radius: 5px;
    }
  }
`;
