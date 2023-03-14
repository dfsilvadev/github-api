import * as S from "./styles";

import { ContainerProps } from "./container";

const Container = ({
  children,
  size = "fluid",
  contentCenter = false,
  direction = "row",
  gap = "1rem"
}: ContainerProps) => {
  return (
    <S.Wrapper
      size={size}
      contentCenter={contentCenter}
      direction={direction}
      gap={gap}
    >
      {children}
    </S.Wrapper>
  );
};

export default Container;
