import styled, { css } from "styled-components";

import { GithubLogoProps } from "./githubLogo";

const wrapModifiers = {
  sm: () => css`
    width: 7.5rem;
  `,
  md: () => css`
    width: 11rem;
  `,
  lg: () => css`
    width: 20rem;
  `
};

export const Wrap = styled.span<GithubLogoProps>`
  ${({ theme, size, color }) => css`
    width: 11rem;
    color: ${theme.colors[color!]};

    svg {
      width: 100%;
      object-fit: cover;
    }

    ${wrapModifiers[size!]};
  `}
`;
