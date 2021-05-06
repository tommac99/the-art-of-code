import { YouTubePlayerContextProps } from "../../../interfaces";
import { useState, useMemo } from "react";

export const useYouTubePlayerState = (): YouTubePlayerContextProps => {
  const [video, setVideo] = useState("");
  const [showYouTubePlayer, setShowYouTubePlayer] = useState(false);

  const onSetVideo = (newVideo: string) => {
    setVideo(newVideo);
  };

  const onSetShowYouTubePlayer = (newShowYouTubePlayer: boolean) => {
    setShowYouTubePlayer(newShowYouTubePlayer);
  };

  const memoizedValues = useMemo(
    () => ({
      showYouTubePlayer,
      onSetShowYouTubePlayer,
      video,
      onSetVideo,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [video, showYouTubePlayer]
  );

  return memoizedValues;
};
