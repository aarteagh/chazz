import React from "react";
import { Link } from "react-router-dom";

import { availableRoutes, routesInfo } from "../../../../constants";

import "../Nav.styles.scss";

type Props = { color: string; activeStyle: string };

export const DesktopMenu = ({ color, activeStyle }: Props) => {
  var currentPage = "/".concat(window.location.pathname.split("/")[1]);

  return (
    <div className="nav">
      <ul>
        {routesInfo
          .filter(route => availableRoutes.includes(route.id))
          .map(route => (
            <li key={route.id}>
              {route.name && (
                <>
                  {route.route !== currentPage ? (
                    <Link className={color !== "black" ? "" : "pagesDesktopNavItem"} to={route.route}>
                      {route.name}
                    </Link>
                  ) : (
                    <span className={activeStyle}>{route.name}</span>
                  )}
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
