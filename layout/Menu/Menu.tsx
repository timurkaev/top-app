import React from "react";
import { AppContext } from "../../context/app.context";
import styles from "./Menu.module.css";

export const Menu: React.FC = (): JSX.Element => {
  const { menu } = React.useContext(AppContext);
  return (
    <div>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
