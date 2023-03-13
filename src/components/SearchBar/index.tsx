import { MagnifyingGlass } from "phosphor-react";

import Button from "../Button";

import { SearchBarProps } from "./searchBar";

import * as S from "./styles";

const SearchBar = ({ hasIcon = false, placeholder }: SearchBarProps) => {
  return (
    <S.Form aria-label="Form Search">
      {hasIcon && (
        <MagnifyingGlass size={20} weight="bold" aria-label="Search icon" />
      )}
      <input type="search" placeholder={placeholder} />
      <Button type="submit">Buscar</Button>
    </S.Form>
  );
};

export default SearchBar;
