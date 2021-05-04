import { FC } from "react";
import { Root } from "./styles";

export const Container: FC<{ children: any }> = ({ children }) => {
  return <Root>{children}</Root>;
};
