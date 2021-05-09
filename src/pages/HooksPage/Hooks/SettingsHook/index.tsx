import { FC } from "react";
import Lottie from "react-lottie";
import { Button, Container, Text } from "../../../../components";
import { Content } from "./styles";
import githubWhite from "../../../../assets/lottie/githubWhite.json";
import { useSettingsContext } from "../../../../hooks";

export const SettingsHook: FC = () => {
  const { showSettings, onSetShowSettings } = useSettingsContext();

  return (
    <Container>
      <Content>
        <Text variant="h2" color="contrast" align="center">
          useFloatingYoutubeHook
        </Text>
        <div className="github">
          <Button>
            <Lottie
              height={40}
              width={40}
              options={{
                autoplay: true,
                loop: true,
                animationData: githubWhite,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </Button>
        </div>
        <div style={{ width: 200, margin: "20px auto 0 auto" }}>
          <Button onClick={() => onSetShowSettings(!showSettings)}>
            Toggle Settings
          </Button>
        </div>
      </Content>
    </Container>
  );
};
