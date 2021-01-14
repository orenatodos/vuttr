import styled, { css } from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.blue};
    border-radius: ${theme.radius.default};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.bodySmall};
    font-weight: ${theme.font.semibold};
    text-transform: uppercase;
    transition: ${theme.transitions.default};

    &:hover {
      background: ${shade(0.2, theme.colors.blue)};
    }

    svg {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;
