import { FC, ReactNode } from "react";
import { GridItemContainer } from "./styles";

export const GridItem: FC<{ children: ReactNode; index: number }> = ({
  children,
  index,
}) => {
  return <GridItemContainer index={index}>{children}</GridItemContainer>;
};
