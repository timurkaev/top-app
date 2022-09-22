import React from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: React.FunctionComponent<T>,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
