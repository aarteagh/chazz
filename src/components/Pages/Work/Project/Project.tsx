import React, { useEffect, useState } from "react";

import { IProject } from "../../../../interfaces/cms";
import { Accordion } from "../Accordion/Accordion";
import { Media } from "../../../shared/index";

import "./Project.styles.scss";

type Props = { data: IProject; format: string; columns?: string; full?: boolean };

export const ProjectCard = ({ data, format, columns }: Props) => {
  let [height, setHeight] = useState<string>("auto");
  const image = data.media.project;

  useEffect(() => {
    // Create image to obtain height
    const img = new Image();
    img.src = image;

    const getImageHeight = (img.onload = () => {
      const height: number = img.height ? img.height : 600;
      // const res = format === "half" ? height / 2 + "px" : height + "px";
      const res = format === "half" ? "444px" : height + "px";
      return res;
    });

    setHeight(getImageHeight());
  }, [image, format, height]);

  const bodyParagraphs = data.body;

  const bodyParagraphs1: string = bodyParagraphs.charCodeAt(0) === 10 ? bodyParagraphs.substring(1) : bodyParagraphs;
  const bodyParagraphs2: string = bodyParagraphs1.charCodeAt(0) === 13 ? bodyParagraphs1.substring(1) : bodyParagraphs1;
  const bodyParagraphs3: string = bodyParagraphs2.charCodeAt(0) === 8 ? bodyParagraphs2.substring(1) : bodyParagraphs2;

  return (
    <div className={`project-container ${columns}`}>
      <div className="project-media">
        <Media src={image} style={{ height, width: "100%" }} alt={data.title} format={format} />
      </div>

      <div className="project-details">
        <div className="project-title-container">
          <span className="title">{data.title} —</span>
          <span className="description">{data.description}</span>
        </div>
        <span className="properties">{data.subtitle}</span>
      </div>
      {/* Accordion */}
      <Accordion content={bodyParagraphs} />
      <div className="non-accordion">{bodyParagraphs3}</div>
    </div>
  );
};
