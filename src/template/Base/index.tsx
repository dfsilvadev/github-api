import { Outlet } from "react-router-dom";

import * as S from "./styles";

const Base = () => {
  return (
    <S.Main aria-label="Main">
      <S.Container aria-label="Content">
        <Outlet />
      </S.Container>
    </S.Main>
  );
};

export default Base;
