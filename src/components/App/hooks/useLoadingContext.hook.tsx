import { LoadingContextProps } from "../../../interfaces";
import { useState, useMemo } from "react";

export const useLoadingState = (): LoadingContextProps => {
  const [isLoading, setIsLoading] = useState(true);

  const onSetIsLoading = (newLoading: boolean, newTimeout?: number) => {
    const timeout = newTimeout ? newTimeout : 3000;

    setIsLoading(newLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, timeout);
  };

  const memoizedValues = useMemo(
    () => ({
      isLoading,
      onSetIsLoading,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading]
  );

  return memoizedValues;
};
