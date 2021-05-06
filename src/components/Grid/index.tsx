import { FC, ReactNode } from "react";
import { GridContainer } from "./styles";

export interface IGrid {
  children: ReactNode;
  mt?: number;
  mb?: number;
  columnWidth: number;
}

export const Grid: FC<IGrid> = ({ children, mt, mb, columnWidth }) => {
  return (
    <GridContainer mt={mt} mb={mb} columnWidth={columnWidth}>
      {children}
    </GridContainer>
  );
};
