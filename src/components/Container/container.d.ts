import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  size?: "fixed" | "fluid";
}
