import styled, { css, DefaultTheme } from "styled-components";

import { WrapperProps } from "./button";

const wrapperModifiers = {
  sm: (theme: DefaultTheme) => css`
    height: 2rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  md: (theme: DefaultTheme) => css`
    height: 2.6875rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};
  `,
  lg: (theme: DefaultTheme) => css`
    height: 3.125rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    font-size: ${theme.font.sizes.medium};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.red};
    font-weight: ${theme.font.weight.bold};
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, minimal, hasIcon, disabled }) => css`
    background: ${theme.colors.red};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    color: ${theme.colors.text};
    text-decoration: none;
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!disabled && wrapperModifiers.disabled}

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
