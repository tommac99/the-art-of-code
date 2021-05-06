import styled from "styled-components";

export const Root = styled.div`
  width: 260px;
  height: 260px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 16px rgba(21, 33, 45, 0.2);
  border-radius: 10px;

  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: repeat(2, 1fr);
`;
