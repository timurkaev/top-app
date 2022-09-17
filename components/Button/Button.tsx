import React from "react"
import { ButtonProps } from "./Button.props"
import ArrowIcon from "./Arrow.svg"

import cn from "classnames"
import styles from "./Button.module.css"

export const Button: React.FC<ButtonProps> = ({
  children,
  appearance,
  arrow = "none",
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
        [styles.right]: appearance,
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  )
}
