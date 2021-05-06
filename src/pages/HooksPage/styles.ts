import styled from "styled-components";
import { ThemeColor } from "../../constants";

export const Content = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-y: scroll;
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

    i {
      font-size: 40px;
      color: ${ThemeColor.text.contrast};
    }
  }
`;
