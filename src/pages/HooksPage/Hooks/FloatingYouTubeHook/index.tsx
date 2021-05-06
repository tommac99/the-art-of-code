import { FC, useState } from "react";
import Lottie from "react-lottie";
import {
  Button,
  Container,
  Grid,
  LoadingScreen,
  Text,
} from "../../../../components";
import { Content } from "./styles";
import githubWhite from "../../../../assets/lottie/githubWhite.json";
import { useYouTubePlayerContext } from "../../../../hooks";

const videos = [
  {
    title:
      "Tutorial: Learn how to use CSS Media Queries in less than 5 minutes",
    author: "Kevin Powell",
    id: "2KL-z9A56SQ",
    stack: ["frontend"],
    categories: ["css"],
  },
  {
    title: "Learn React In 30 Minutes",
    author: "Web Dev Simplified",
    id: "hQAHSlTtcmY",
    stack: ["frontend"],
    categories: ["css", "js", "react"],
  },
  {
    title: "10 React Hooks Explained // Plus Build your own from Scratch",
    author: "Fireship",
    id: "TNhaISOUy6Q",
    stack: ["frontend"],
    categories: ["js", "react"],
  },
];

// TODO: Extract to interface library
interface IVideos {
  title: string;
  author: string;
  id: string;
  stack: string[];
  categories: string[];
}

export const FloatingYouTubeHook: FC = () => {
  const [items] = useState<IVideos[] | null>(videos);

  const { onSetShowYouTubePlayer, onSetVideo } = useYouTubePlayerContext();

  // TODO: Fix service hook
  // useEffect(() => {
  //   async function getData() {
  //     const data = await GetHooks();
  //     console.log("data:", data);
  //     setItems(data);
  //   }

  //   getData();
  // }, []);

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
        <div style={{ height: 40 }} />
        {!items && <LoadingScreen />}
        {items && (
          <Grid columnWidth={200}>
            {items.map(({ title, id }) => {
              return (
                <div
                  key={id}
                  className="yt"
                  onClick={() => {
                    onSetVideo(id);
                    onSetShowYouTubePlayer(true);
                  }}
                >
                  <div className="overlay">
                    <i className="fab fa-youtube" />
                  </div>
                  <img
                    className="card-img-top"
                    src={`https://img.youtube.com/vi/${id}/sddefault.jpg`}
                    alt="Card cap"
                    width={180}
                    height={100}
                  />
                  <Text variant="body1" lineHeight={true} mt={10}>
                    {title}
                  </Text>
                </div>
              );
            })}
          </Grid>
        )}
      </Content>
    </Container>
  );
};
