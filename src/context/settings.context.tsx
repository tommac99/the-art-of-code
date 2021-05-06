import { createContext } from "react";
import { SettingsContextProps } from "../interfaces";

export const SettingsContext = createContext<SettingsContextProps>({
  showSettings: false,
  onSetShowSettings: () => {},
});
