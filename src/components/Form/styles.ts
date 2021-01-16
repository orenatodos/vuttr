import styled, { css } from 'styled-components';

import { Form } from '@unform/web';
import { shade } from 'polished';

import { Container as Field } from './Field/styles';
import { Container as Button } from '../Button/styles';

export const Container = styled(Form)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${Field} {
      margin-bottom: ${theme.spacings.small};

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

    ${Button} {
      height: 5rem;
      padding: 0 ${theme.spacings.medium};
      align-self: flex-end;
      background: ${theme.colors.green};
      margin-top: ${theme.spacings.small};

      &:hover {
        background: ${shade(0.2, theme.colors.green)};
      }
    }
  `}
`;
