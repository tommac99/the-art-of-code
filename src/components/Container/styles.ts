import styled from "styled-components";
import { mediaQueries } from "../../utils";

export const Root = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;

  ${mediaQueries("sm")`
  `};

  ${mediaQueries("md")`
    padding: 20px 40px;
  `};

  ${mediaQueries("lg")`
  `};

  ${mediaQueries("xl")`
    maxWidth: 1120px;
  `};
`;
