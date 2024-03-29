import styled, { DefaultTheme, css } from "styled-components";

import { ContainerProps } from "./container";

const wrapperModifiers = {
  fixed: (theme: DefaultTheme) => css`
    max-width: ${theme.grid.container};
  `,
  fluid: () => css`
    width: 100%;
  `,
  contentCenter: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
};

export const Wrapper = styled.div<Omit<ContainerProps, "children">>`
  ${({ theme, size, contentCenter, direction, gap }) => css`
    height: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};

    ${!!size && wrapperModifiers[size](theme)};
    ${contentCenter && wrapperModifiers.contentCenter()};

    flex-direction: ${() => direction};
    gap: ${() => gap};
  `}
`;
