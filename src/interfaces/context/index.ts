export interface ScrollContextProps {
  scrollYPosition: number;
  onSetScrollYPosition: (newScrollYPosition: number) => void;
}

export interface LoadingContextProps {
  isLoading: boolean;
  onSetIsLoading: (newLoading: boolean, newTimeout?: number) => void;
}
