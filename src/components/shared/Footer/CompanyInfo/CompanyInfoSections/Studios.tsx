import React from "react";

import studios from "../../../../../content/studios.json";
import { LinkedEmail } from "./footerLinks";

import "../CompanyInfo.styles.scss";

type Props = { title: string };

export const Studios = ({ title }: Props) => {
  const gridColumns = window.innerWidth > 480 ? 3 : 2;
  // Define the number of rows so that there's always the required amount of columns (gridColumns)
  const gridRows: number = Math.floor(studios.length / gridColumns) + 1;

  return (
    <div className="studios-container">
      <p className="section-title">{title}</p>
      <div className="studios-grid" style={{ gridTemplateRows: `repeat(${gridRows}, 1fr)` }}>
        {studios.map((studio, index: number) => (
          <div className="studios-info" key={index}>
            <p className="city">{studio.city}</p>
          </div>
        ))}
        <div className="desktop-email">
          <LinkedEmail email="tangity@nttdata.com" />
        </div>
      </div>
      <div className="mobile-email">
        <LinkedEmail email="tangity@nttdata.com" />
      </div>
    </div>
  );
};
