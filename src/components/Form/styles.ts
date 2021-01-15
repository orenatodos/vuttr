import styled, { css } from 'styled-components';

import { Form } from '@unform/web';

import { shade } from 'polished';
import { Container as Field } from './Field/styles';

export const Container = styled(Form)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    strong {
      display: flex;
      align-items: center;
      font-size: ${theme.font.sizes.header1};

      svg {
        margin-right: ${theme.spacings.xsmall};
      }
    }

    ${Field} {
      span {
        display: flex;
        align-items: center;
        padding: ${theme.spacings.xsmall};
        background: ${theme.colors.white};
        border-radius: ${theme.radius.default};
        cursor: pointer;

        > svg {
          margin-left: ${theme.spacings.xxsmall};
        }
      }
    }

    button {
      height: 5rem;
      padding: 0 ${theme.spacings.medium};
      align-self: flex-end;
      background: ${theme.colors.green};
      margin-top: ${theme.spacings.medium};

      &:hover {
        background: ${shade(0.2, theme.colors.green)};
      }
    }
  `}
`;
