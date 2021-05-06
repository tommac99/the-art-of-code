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
    width: 200px;
    height: 100px;
    background: red;
  }
`;
