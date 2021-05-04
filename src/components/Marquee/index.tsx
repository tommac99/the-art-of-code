import React, { FC } from "react";
import FastMarquee from "react-fast-marquee";

import { Container, Icon } from "./styles";
import { icons } from "./data";

export const Marquee: FC = () => {
  return (
    <Container>
      <FastMarquee gradientWidth={0} speed={10}>
        {icons.map(({ icon, top, right, speed }, index) => {
          return (
            <Icon top={top} right={right} speed={speed} index={index}>
              {icon}
            </Icon>
          );
        })}
      </FastMarquee>
    </Container>
  );
};
