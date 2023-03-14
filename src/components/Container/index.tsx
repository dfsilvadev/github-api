import * as S from "./styles";

import { ContainerProps } from "./container";

const Container = ({ children, size = "fluid" }: ContainerProps) => {
  return <S.Wrapper size={size}>{children}</S.Wrapper>;
};

export default Container;
