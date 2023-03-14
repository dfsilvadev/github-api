import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  size?: "fixed" | "fluid";
  contentCenter?: boolean;
  direction?: "row" | "column";
  gap?: string;
}
