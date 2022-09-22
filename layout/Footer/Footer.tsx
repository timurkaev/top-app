import React from "react";
import { FooterProps } from "./Footer.props";

export const Footer: React.FC<FooterProps> = ({ ...props }): JSX.Element => {
  return <footer {...props}>Footer</footer>;
};
