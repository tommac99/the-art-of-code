import { createContext } from "react";
import { YouTubePlayerContextProps } from "../interfaces";

export const YouTubePlayerContext = createContext<YouTubePlayerContextProps>({
  showYouTubePlayer: false,
  onSetShowYouTubePlayer: () => {},
  video: "",
  onSetVideo: () => {},
});
