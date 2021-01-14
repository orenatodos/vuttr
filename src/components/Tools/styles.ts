import styled, { css } from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    article {
      box-shadow: ${theme.shadows.elevation2};
      border: 0.1rem solid ${theme.colors.darkestWhite};
      border-radius: ${theme.radius.default};
      padding: ${theme.spacings.small};
      position: relative;

      & + article {
        margin-top: ${theme.spacings.medium};
      }

      a {
        display: inline-block;
        font-size: ${theme.font.sizes.header1};
        font-weight: ${theme.font.bold};
        color: ${theme.colors.blue};
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.2rem;
          background: currentColor;
        }
      }

      p {
        margin-top: ${theme.spacings.xsmall};
      }

      ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: ${theme.spacings.small};
        font-weight: ${theme.font.semibold};
        margin-top: ${theme.spacings.small};
      }

      > div {
        position: absolute;
        top: ${theme.spacings.small};
        right: ${theme.spacings.small};
        display: flex;
        align-items: center;

        button {
          padding: ${theme.spacings.xsmall};
          border-radius: ${theme.radius.default};
          color: ${theme.colors.white};
          transition: ${theme.transitions.default};
        }

        .edit {
          background: ${theme.colors.blue};
          margin-right: ${theme.spacings.xsmall};

          &:hover {
            background: ${shade(0.2, theme.colors.blue)};
          }
        }

        .remove {
          background: ${theme.colors.red};

          &:hover {
            background: ${shade(0.2, theme.colors.red)};
          }
        }
      }
    }
  `}
`;
