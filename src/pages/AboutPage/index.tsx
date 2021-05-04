import { FC, useEffect } from "react";
import { Container, LoadingScreen, Text } from "../../components";
import { Content } from "./styles";
import { useLoadingState } from "../../components/App/hooks";
import Typewriter from "typewriter-effect";

export const AboutPage: FC = () => {
  return (
    <Content>
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
            <div className="text-group">
              <Text variant="h2" slab={true} mb={10} align="center">
                Thomas MacFarlaine
              </Text>
            </div>
            <div className="text-group">
              <Text
                variant="h3"
                weight="normal"
                slab={true}
                mb={10}
                align="center"
              >
                Full Stack Developer
              </Text>
            </div>
            <div className="text-group">
              <Text
                variant="h4"
                weight="normal"
                slab={true}
                mb={10}
                align="center"
              >
                Global Citizen
              </Text>
            </div>
            <div className="text-group">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <i
                  style={{ marginLeft: 10 }}
                  className="flag-icon flag-icon-za"
                />
                <i
                  style={{ marginLeft: 10 }}
                  className="flag-icon flag-icon-nz"
                />
                <i
                  style={{ marginLeft: 10 }}
                  className="flag-icon flag-icon-ie"
                />
              </div>
            </div>
            <div className="text-group">
              <Typewriter
                onInit={(typewriter) =>
                  typewriter
                    .pauseFor(1600)
                    .typeString("Story Teller")
                    .pauseFor(1600)
                    .deleteAll()
                    .typeString("Creative Thinker")
                    .pauseFor(1600)
                    .deleteAll()
                    .typeString("Entrepreneur")
                    .pauseFor(1600)
                    .deleteAll()
                    .typeString("Strategic Planner")
                    .start()
                }
                options={{ loop: true }}
              />
            </div>
            <div className="text-group">
              <a href="https://github.com/tommac99">
                <i className="fab fa-github-square" />
              </a>
              <a href="https://www.linkedin.com/in/thomas-macfarlaine/">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://codepen.io/tommac99">
                <i className="fab fa-codepen" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Content>
  );
};
