import { FC, useEffect, useState } from "react";
import { Container, Grid, Text, GridItem, Button } from "../../components";
import { Content } from "./styles";
import { GetHooks } from "../../services";
import { Link } from "react-router-dom";

interface IHooks {
  title: string;
  icon: string;
  link: string;
}

export const HooksPage: FC = () => {
  const [items, setItems] = useState<IHooks[] | null>(null);

  useEffect(() => {
    async function getData() {
      const data = await GetHooks();
      setItems(data);
    }

    getData();
  }, []);

  return (
    <Content>
      <Container>
        <div className="inner">
          <div className="title">
            <Text variant="h2" align="center">
              Hooks
            </Text>
          </div>
          <div className="content">
            <Grid columnWidth={280}>
              {items &&
                items.map(({ title, icon, link }, index) => {
                  return (
                    <GridItem key={index} index={index}>
                      <Text variant="h2" color="contrast" align="center">
                        {title}
                      </Text>
                      <i className={icon} />
                      <Link to={`/hooks/${link}`}>
                        <Button>Use</Button>
                      </Link>
                    </GridItem>
                  );
                })}
            </Grid>
            <Text variant="h2" align="center" mt={20} mb={40}>
              More coming very soon...
            </Text>
          </div>
        </div>
      </Container>
    </Content>
  );
};
