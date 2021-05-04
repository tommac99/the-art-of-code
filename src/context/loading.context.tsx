import { createContext } from "react";
import { LoadingContextProps } from "../interfaces";

export const LoadingContext = createContext<LoadingContextProps>({
  isLoading: true,
  onSetIsLoading: () => {},
});
