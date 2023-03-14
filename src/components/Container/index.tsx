import * as S from "./styles";

import { ContainerProps } from "./container";

const Container = ({
  children,
  size = "fluid",
  contentCenter = false
}: ContainerProps) => {
  return (
    <S.Wrapper size={size} contentCenter={contentCenter}>
      {children}
    </S.Wrapper>
  );
};

export default Container;
