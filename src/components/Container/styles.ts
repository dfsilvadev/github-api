import styled, { DefaultTheme, css } from "styled-components";

import { ContainerProps } from "./container";

const wrapperModifiers = {
  fixed: (theme: DefaultTheme) => css`
    max-width: ${theme.grid.container};
  `,
  fluid: () => css`
    width: 100%;
  `
};

export const Wrapper = styled.div<Pick<ContainerProps, "size">>`
  ${({ theme, size }) => css`
    height: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};

    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
