import { ReactNode } from "react";
import Nav from "./Nav";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}

export default Layout;
