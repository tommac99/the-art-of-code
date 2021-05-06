export interface ScrollContextProps {
  scrollYPosition: number;
  onSetScrollYPosition: (newScrollYPosition: number) => void;
}

export interface LoadingContextProps {
  isLoading: boolean;
  onSetIsLoading: (newLoading: boolean, newTimeout?: number) => void;
}

export interface YouTubePlayerContextProps {
  showYouTubePlayer: boolean;
  onSetShowYouTubePlayer: (newShowYouTubePlayer: boolean) => void;
  video: string;
  onSetVideo: (newVideo: string) => void;
}

export interface SettingsContextProps {
  showSettings: boolean;
  onSetShowSettings: (newShowSettings: boolean) => void;
}
