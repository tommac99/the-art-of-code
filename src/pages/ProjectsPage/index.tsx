import { FC, useEffect } from "react";
import { Container, LoadingScreen, Projects, Text } from "../../components";
import { Content } from "./styles";
import { useLoadingState } from "../../components/App/hooks";

export const ProjectsPage: FC = () => {
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
                Projects
              </Text>
            </div>
            <div className="content">
              <Projects />
            </div>
          </div>
        </Container>
      )}
    </Content>
  );
};
