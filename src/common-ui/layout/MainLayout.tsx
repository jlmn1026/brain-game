import { ReactNode } from "react";
import { pageRootContainer } from "../common.css";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <div className={pageRootContainer}>{children}</div>
    </>
  );
};

export default MainLayout;
