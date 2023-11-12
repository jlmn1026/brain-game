import { ReactNode } from "react";
import { commonContainer } from "./common.css";

type Props = {
  children: ReactNode;
};

const CommonContainer = ({ children }: Props) => {
  return <div className={commonContainer}>{children}</div>;
};

export default CommonContainer;
