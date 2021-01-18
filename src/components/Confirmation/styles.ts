import styled, { css } from 'styled-components';

import { shade } from 'polished';

import { Container as Button } from '../Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    p {
      font-size: ${theme.font.sizes.bodySmall};
    }

    div {
      display: flex;
      justify-content: flex-end;
      margin-top: ${theme.spacings.medium};

      ${Button}:last-child {
        margin-left: ${theme.spacings.small};
        background: ${theme.colors.red};

        &:hover {
          background: ${shade(0.2, theme.colors.red)};
        }
      }
    }
  `}
`;
