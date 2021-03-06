import { FC, useEffect } from "react";
import { Container, LoadingScreen, Text } from "../../components";
import { Content } from "./styles";
import { useLoadingState } from "../../components/App/hooks";
import Lottie from "react-lottie";
import findingBug from "../../assets/lottie/findingBug.json";

export const BugsPage: FC = () => {
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
            <div className="content">
              <Lottie
                height={260}
                width={260}
                options={{
                  autoplay: true,
                  loop: true,
                  animationData: findingBug,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
          </div>
        </Container>
      )}
    </Content>
  );
};
