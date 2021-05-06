import styled from "styled-components";
import { ThemeColor } from "../../constants";

export const Container = styled.div`
  position: absolute;
  z-index: 9;
  top: 100px;
  right: 100px;
  width: 280px;
  height: 280px;
  background: linear-gradient(
    -120deg,
    ${ThemeColor.background.dark},
    ${ThemeColor.background.darkest}
  );
  box-shadow: 0 4px 8px rgba(49, 49, 49, 0.16);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;
