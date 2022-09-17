import React from "react";
import { PtagProps } from "./Ptag.props";

import cn from "classnames";
import styles from "./Ptag.module.css";

export const Ptag: React.FC<PtagProps> = ({ children, size = "medium" }): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
    >
      {children}
    </p>
  );
};
