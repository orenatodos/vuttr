import styled, { css } from 'styled-components';

import { shade } from 'polished';

import { Container as Button } from '../Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    strong {
      display: flex;
      align-items: center;
      font-size: ${theme.font.sizes.header1};

      svg {
        margin-right: ${theme.spacings.xsmall};
      }
    }

    p {
      font-size: ${theme.font.sizes.bodySmall};
      margin-top: ${theme.spacings.medium};
    }

    div {
      display: flex;
      justify-content: flex-end;
      gap: ${theme.spacings.medium};
      margin-top: ${theme.spacings.medium};

      ${Button}:last-child {
        background: ${theme.colors.red};

        &:hover {
          background: ${shade(0.2, theme.colors.red)};
        }
      }
    }
  `}
`;
