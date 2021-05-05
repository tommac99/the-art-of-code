import { FC, useState } from "react";
import { Container } from "./styles";
import { Text } from "../index";
import Lottie from "react-lottie";
import githubWhite from "../../assets/lottie/githubWhite.json";
// @ts-ignore
import EllipsisText from "react-ellipsis-text";

interface IProject {
  title: string;
  description: string;
  link: string;
  image: string;
  repo: string | null;
  position: string | null;
}

export const Project: FC<{ item: IProject }> = ({
  item: { title, description, link, image, repo, position },
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Container position={position}>
      <img src={image} alt={image} className="image" />
      <div className="content">
        <Text
          variant="h4"
          color="contrast"
          slab={true}
          align="center"
          mb={10}
          lineHeight={true}
        >
          {title}
        </Text>
        <EllipsisText
          text={description}
          length={showFullDescription ? "1000" : "110"}
        />
        <div onClick={() => setShowFullDescription(!showFullDescription)}>
          {showFullDescription ? "Read less" : "Read more"}
        </div>
      </div>
      <div className="btns">
        {!!link ? (
          <a href={link} className="btn-grad demo">
            <Text color="contrast">Live Demo</Text>
          </a>
        ) : (
          <div className="btn-grad demo disabled">
            <Text color="contrast">Live Demo</Text>
          </div>
        )}
        <div className={`btn-grad github ${!!repo && "disabled"}`}>
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
      </div>
    </Container>
  );
};
