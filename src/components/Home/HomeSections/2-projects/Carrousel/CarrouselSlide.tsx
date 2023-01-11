import React, { useEffect, useState } from "react";

import { IProject } from "../../../../../interfaces/cms";
import { Media } from "../../../../shared/Media/Media";

interface MediaStyle {
  width: string;
  height: string;
  objectFit: string;
}

export const CarrouselSlide = (props: IProject) => {
  const [mediaStyle, setMediaStyle] = useState<MediaStyle>({ width: "0%", height: "0px", objectFit: "cover" });
  const screenWidth: number = window.innerWidth;

  useEffect(() => {
    setMediaStyle(
      screenWidth >= 1080
        ? // ? { width: "100%", height: "744px", objectFit: "cover" }
          { width: "100%", height: "90vh", objectFit: "cover" }
        : { width: "100%", height: "544px", objectFit: "cover" }
    );

    const resizeSlides = () => {
      setMediaStyle(
        screenWidth >= 1080
          ? // ? { width: "100%", height: "744px", objectFit: "cover" }
            { width: "100%", height: "90vh", objectFit: "cover" }
          : { width: "100%", height: "544px", objectFit: "cover" }
      );
    };

    window.addEventListener("resize", resizeSlides);

    return () => {
      window.removeEventListener("resize", resizeSlides);
    };
  }, [setMediaStyle, screenWidth]);

  return (
    <>
      <div>
        <Media src={props.image} style={mediaStyle} alt={props.title} />
        <br />
      </div>
      <p className="title">
        <strong>{props.title}</strong> — {props.description}
      </p>
      <p className="properties">{props.subtitle}</p>
    </>
  );
};
