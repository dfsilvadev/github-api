import { forwardRef, ForwardRefRenderFunction } from "react";

import * as S from "./styles";

import { ButtonProps, WrapperProps } from "./button";

const Button: ForwardRefRenderFunction<WrapperProps, ButtonProps> = (
  { children, size = "md", fullWidth = false, minimal = false, icon, ...props },
  ref
) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      ref={ref}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

export default forwardRef(Button);
