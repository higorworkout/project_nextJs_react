import styled, { css, DefaultTheme } from 'styled-components';

type background = {
  background?: boolean;
}

const containerBackgroundActivate = (theme: DefaultTheme) => css`
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
`;

export const Container = styled.div<background>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};

    ${!!background && containerBackgroundActivate(theme)};

    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
