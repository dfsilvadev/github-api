import { Outlet } from "react-router-dom";

import * as S from "./styles";

const Base = () => {
  return (
    <S.Main aria-label="Main">
      <Outlet />
    </S.Main>
  );
};

export default Base;
