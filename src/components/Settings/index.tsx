import { FC } from "react";
import { useSettingsContext } from "../../hooks";
import { Container } from "./styles";

export const Settings: FC = () => {
  const { showSettings } = useSettingsContext();

  if (!showSettings) {
    return null;
  }

  return (
    <Container>
      <h1>Settings</h1>
    </Container>
  );
};
