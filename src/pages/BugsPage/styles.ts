import styled from "styled-components";
import { ThemeColor } from "../../constants";

export const Content = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f7f9fe;

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
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .content {
    position: relative;
    width: 100%;
    max-width: 560px;
    height: 100%;
    max-height: 280px;
    border-radius: 10px;
    background: ${ThemeColor.background.dark};
    box-shadow: 0 4px 8px rgba(131, 133, 145, 0.16);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
