import { FC } from "react";
import { Root } from "./styles";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { useYouTubePlayerContext } from "../../hooks";

export const YouTubePlayer: FC = () => {
  const {
    video,
    showYouTubePlayer,
    onSetShowYouTubePlayer,
  } = useYouTubePlayerContext();

  if (!showYouTubePlayer) {
    return null;
  }

  return (
    <Draggable handle=".handle">
      <Root>
        <ResizableBox width={450} height={300}>
          <iframe
            title="YouTube Player"
            id="player"
            style={{ width: "100%", height: "100%" }}
            src={`https://www.youtube.com/embed/${video}`}
            frameBorder={0}
          />

          <div
            className="close"
            onClick={() => {
              onSetShowYouTubePlayer(false);
            }}
          >
            <i className="fas fa-times"></i>
          </div>
          <div className="handle">
            <i className="fas fa-arrows-alt"></i>
          </div>
        </ResizableBox>
      </Root>
    </Draggable>
  );
};
