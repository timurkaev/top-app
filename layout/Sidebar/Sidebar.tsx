import React from "react";
import { Menu } from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar: React.FC<SidebarProps> = ({ ...props }): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
