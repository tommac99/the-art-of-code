import styled from "styled-components";
import { IGrid } from ".";

export const GridContainer = styled.div<IGrid>`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(
    auto-fill,
    ${({ columnWidth }) => (columnWidth ? columnWidth : 0)}px
  );
  justify-content: center;
  justify-items: center;
  margin-top: ${({ mt }) => (mt ? mt : 0)}px;
  margin-bottom: ${({ mt }) => (mt ? mt : 0)}px;
`;
