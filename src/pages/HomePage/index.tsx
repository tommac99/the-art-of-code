import React, { FC, useEffect } from "react";
import { Container, LoadingScreen, Text } from "../../components";
import { Content } from "./styles";
import { useLoadingState } from "../../components/App/hooks";
import { Link } from "react-router-dom";

export const HomePage: FC = () => {
  const { isLoading, onSetIsLoading } = useLoadingState();

  useEffect(() => {
    onSetIsLoading(true, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <Container>
          <div className="inner">
            <div className="title">
              <Text variant="h2" align="center">
                Art
              </Text>
              <Text variant="h2" align="center">
                of
              </Text>
              <Text variant="h2" align="center">
                Code
              </Text>
            </div>
            <Link to="/about" className="content">
              {/* <div className="content"> */}
              <div className="start">Explore.</div>
              {/* </div> */}
            </Link>
          </div>
        </Container>
      )}
    </Content>
  );
};
