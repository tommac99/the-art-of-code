import { FC, useEffect, useState } from "react";
// import { useMediaQuery } from "@react-hook/media-query";

import { Container } from "./styles";
import { Text } from "../index";
import Lottie from "react-lottie";
import loadingHand from "../../assets/lottie/loadingHand.json";
import githubWhite from "../../assets/lottie/githubWhite.json";

interface IProject {
  title: string;
  description: string;
  link: string | null;
  image: string | null;
  repo: string | null;
  position: string | null;
}

export const Project: FC<{ item: IProject }> = ({
  item: { title, description, link, image, repo, position },
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  // const matches = useMediaQuery("only screen and (max-width: 680px)");

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 5000);
  }, []);

  if (image === null) {
    return (
      <Container position={position}>
        {!hasLoaded ? (
          <Lottie
            height={200}
            width={200}
            options={{
              autoplay: true,
              loop: true,
              animationData: loadingHand,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        ) : (
          <div className="card-content">
            <Text variant="h3" mb={20}>
              {title}
            </Text>
            <Text
              variant="body1"
              slab={false}
              weight="normal"
              lineHeight={true}
            >
              {description}
            </Text>
          </div>
        )}
      </Container>
    );
  }

  return (
    <Container position={position}>
      <div className="image-overlay" />
      <img src={image} alt={image} className="image" />
      <div className="btns">
        {!!link ? (
          <a href={link} className="btn-grad demo">
            <Text color="secondary">Live Demo</Text>
          </a>
        ) : (
          <div className="btn-grad demo disabled">
            <Text color="secondary">Live Demo</Text>
          </div>
        )}
        {!!repo ? (
          <a href={repo} className="btn-grad github">
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
          </a>
        ) : (
          <div className="btn-grad github disabled">
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
          </div>
        )}
      </div>
    </Container>
  );
};
