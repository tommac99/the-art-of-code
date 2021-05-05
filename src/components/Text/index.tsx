import React, { FC, ReactChild } from "react";
import { ThemeColor } from "../../constants";
import { TextContainer } from "./styles";

interface ITextProps {
  children: string | ReactChild;
  variant?: "h1" | "h2" | "h3" | "h4" | "body1" | "body2";
  color?: "primary" | "secondary" | "contrast";
  weight?: "light" | "normal" | "bold";
  align?: "left" | "center" | "right";
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  className?: string;
  lineHeight?: boolean;
  slab?: boolean;
}

const variants = {
  h1: 40,
  h2: 32,
  h3: 24,
  h4: 20,
  body1: 16,
  body2: 12,
};

const fontWeights = {
  light: "300",
  normal: "400",
  bold: "700",
};

export const Text: FC<ITextProps> = ({
  children,
  variant = "body1",
  color = "primary",
  weight = "bold",
  align = "left",
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  className,
  lineHeight,
  slab = false,
}) => {
  return (
    <TextContainer
      className={className}
      fontSize={variants[variant]}
      lineHeight={lineHeight ? variants[variant] * 1.5 : variants[variant]}
      color={ThemeColor.text[color]}
      fontWeight={fontWeights[weight]}
      marginTop={mt}
      marginBottom={mb}
      marginLeft={ml}
      marginRight={mr}
      textAlign={align}
      slab={slab}
    >
      {children}
    </TextContainer>
  );
};
