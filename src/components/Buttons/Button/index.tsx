import { FC, ReactNode } from "react";
import { Container } from "./styles";

// TODO: Use correct type for onClick
export const Button: FC<{ children: ReactNode; onClick?: any }> = ({
  children,
  onClick,
}) => {
  return <Container onClick={onClick}>{children}</Container>;
};
