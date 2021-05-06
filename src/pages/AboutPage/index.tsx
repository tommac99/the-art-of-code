import { FC } from "react";
import { Container, Text } from "../../components";
import { Content } from "./styles";
import TextLoop from "react-text-loop";

const words = [
  "Story Teller",
  "Creative Thinker",
  "Entrepreneur",
  "Strategic Planner",
  "Risk Taker",
  "Seriously, hire this guy!",
];

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
                mb={20}
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
              <TextLoop noWrap={false} interval={3500}>
                {words.map((word, index) => {
                  return (
                    <Text
                      key={index}
                      variant="h4"
                      weight="bold"
                      className="text"
                    >
                      {word}
                    </Text>
                  );
                })}
              </TextLoop>
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
