import { SettingsContextProps } from "../../../interfaces";
import { useState, useMemo } from "react";

export const useSettingsState = (): SettingsContextProps => {
  const [showSettings, setShowSettings] = useState(false);

  const onSetShowSettings = (newShowSettings: boolean) => {
    setShowSettings(newShowSettings);
  };

  const memoizedValues = useMemo(
    () => ({
      showSettings,
      onSetShowSettings,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showSettings]
  );

  return memoizedValues;
};
