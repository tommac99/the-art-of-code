import styled from "styled-components";
import { ThemeColor } from "../../constants";

export const Root = styled.div`
  position: fixed;
  width: 450px;
  height: 300px;
  bottom: 40px;
  right: 40px;

  .react-resizable {
    padding: 10px 20px 20px 20px;
    border-radius: 0 0 20px 20px;
    background: ${ThemeColor.background.darkest};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    border-bottom-right-radius: 0;

    iframe {
      border-radius: 10px;
      overflow: hidden;
    }
  }

  .close,
  .handle {
    position: absolute;
    right: 0;
    top: -40px;
    width: 40px;
    height: 40px;
    background: ${ThemeColor.background.dark};
    color: ${ThemeColor.text.contrast};
    opacity: 1;
    padding: 3px;
    cursor: pointer;
    display: grid;
    align-content: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .handle {
    width: calc(100% - 40px);
    right: 40px;
    cursor: move;
    background: ${ThemeColor.background.darkest};
  }

  .react-resizable-handle::after {
    content: "";
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid ${ThemeColor.text.contrast};
    border-bottom: 2px solid ${ThemeColor.text.contrast}; // Update rgba values for color and transparency.
  }
`;
