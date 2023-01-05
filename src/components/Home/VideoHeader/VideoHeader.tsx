import React, { useState, useRef } from "react";
import "../VideoHeader/VideoHeader.style.scss";
import { useEffect } from 'react';

type Props = {
  isPlaying: boolean;
  setIsPlaying: (a: boolean) => void;
  isNavVisible: boolean;
  setIsNavVisible: (a: boolean) => void;
};

export const VideoHeader = ({ isPlaying, setIsPlaying, isNavVisible, setIsNavVisible }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [controlText, setControlText] = useState<string>("Play");

  console.log({ isPlaying, isNavVisible })
  const switchPlayPause = () => {
    setIsPlaying(!isPlaying);

    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsNavVisible(!isNavVisible);
      setControlText("Play");
    }
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setControlText("Stop");
      setTimeout(() => {
        setIsNavVisible(!isNavVisible);
      }, 1000)
    }
  };

  useEffect(() => {
    if (!isPlaying && !isNavVisible) {
      setIsNavVisible(true);
    }
  }, [isPlaying, isNavVisible])

  return (
    <>
      <div className="player-video">
        {isPlaying}

        <div className={!isPlaying ? "play-icon-out" : "play-icon-in"} onClick={switchPlayPause}></div>
        <div className={!isPlaying ? "stop-icon-out" : "stop-icon-in"} onClick={switchPlayPause}></div>

        <span style={{ marginLeft: 20 }} onClick={switchPlayPause}>
          {controlText} reel
        </span>
      </div>

      <video
        className="video-header"
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
      ></video>
    </>
  );
};
