import { FC } from "react";
import { useSettingsContext } from "../../hooks";
import { Text } from "..";
import { Container } from "./styles";

export const Settings: FC = () => {
  const { showSettings } = useSettingsContext();

  if (!showSettings) {
    return null;
  }

  return (
    <Container>
      <Text variant="h2" color="contrast">
        Settings
      </Text>
      <Text variant="body1" color="contrast" mt={20}>
        Coming soon...
      </Text>
    </Container>
  );
};
