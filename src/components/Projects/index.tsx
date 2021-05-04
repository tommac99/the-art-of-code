import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Container } from "./styles";
import { Project } from "../Project";
import Lottie from "react-lottie";
import left from "../../assets/lottie/left.json";
import right from "../../assets/lottie/right.json";
import { Carousel } from "react-responsive-carousel";
import { projects } from "./data";

export const Projects: FC = () => {
  return (
    <Container>
      <div className="carousel-container">
        <Carousel
          onChange={(_index, _item) => {}}
          swipeable={true}
          // infiniteLoop={true}
          interval={3000}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow left-arrow"
              >
                <Lottie
                  height={40}
                  width={40}
                  options={{
                    autoplay: true,
                    loop: false,
                    animationData: left,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasPrev, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow right-arrow"
            >
              <Lottie
                height={40}
                width={40}
                options={{
                  autoplay: true,
                  loop: false,
                  animationData: right,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </button>
          )}
        >
          {projects.map((item) => {
            return (
              <div className="project-slide">
                <Project item={item} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </Container>
  );
};
