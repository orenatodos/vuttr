import styled, { css } from 'styled-components';

import { shade } from 'polished';

export const Container = styled.form`
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
