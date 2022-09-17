import React from "react";

import cn from "classnames";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

export const Tag: React.FC<TagProps> = ({
  children,
  size = "medium",
  color = "ghost",
  href,
  ...props
}): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.grey]: color === "grey",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
