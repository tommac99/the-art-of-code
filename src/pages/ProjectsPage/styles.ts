import styled, { keyframes } from "styled-components";
import { ThemeColor } from "../../constants";

export const Content = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: ${ThemeColor.background.darkest};

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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 40px;
    margin-bottom: 40px;

    & > div {
      color: ${ThemeColor.background.gray};
    }
  }

  .content {
    position: relative;
    width: 100%;
    max-width: 560px;
  }
`;
