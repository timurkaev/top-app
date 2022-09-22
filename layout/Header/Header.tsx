import React from "react";
import { HeaderProps } from "./Header.props";

export const Header: React.FC<HeaderProps> = ({ ...props }): JSX.Element => {
  return <header {...props}>Header</header>;
};
