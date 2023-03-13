import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: ReactNode;
  as?: ElementType;
  children?: ReactNode;
} & ButtonTypes;

export interface WrapperProps
  extends Pick<ButtonProps, "size" | "fullWidth" | "minimal"> {
  hasIcon: boolean;
}
