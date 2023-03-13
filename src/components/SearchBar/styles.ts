import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.panel};
    outline-offset: ${theme.border.outlineOffiset};
    border: 2px solid transparent;

    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    &:focus-within {
      outline-offset: ${theme.border.outlineOffiset};
      border: 2px solid ${theme.colors.primary};
    }

    input[type="search"] {
      flex: 1;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      background-color: transparent;
      border: 0;
      outline: none;
    }

    svg {
      color: ${theme.colors.primary};
    }
  `}
`;
