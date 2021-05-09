import styled from "styled-components";
import { ThemeColor } from "../../constants";

export const Content = styled.div`
  position: relative;
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
    max-width: 400px;
    background: ${ThemeColor.background.dark};
    padding: 20px;
    border-radius: 10px;
    text-align: center;

    & input,
    textarea {
      width: 100%;
      max-width: 100%;
      max-height: 600px;
      padding: 10px;
      border: none;
      border-radius: 10px;
      margin-bottom: 10px;
      font-family: "Roboto";
    }

    button {
      border: none;
      height: 48px;
      padding: 10px 20px;
      border-radius: 10px;
      background: linear-gradient(
        0deg,
        ${ThemeColor.background.blue.main},
        ${ThemeColor.background.blue.light}
      );
      font-size: 20px;
      font-weight: 700;
      color: ${ThemeColor.text.contrast};
      cursor: pointer;
    }
  }
`;
