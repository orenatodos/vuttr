import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.radius.default};
    padding: ${theme.spacings.small};
    position: relative;
    margin-top: ${theme.spacings.medium};

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
      margin-top: ${theme.spacings.xsmall};
    }

    > div {
      position: absolute;
      top: ${theme.spacings.small};
      right: ${theme.spacings.small};
      display: flex;
      align-items: center;
      gap: ${theme.spacings.small};

      button {
        background: transparent;
        text-transform: uppercase;

        svg {
          margin-right: ${theme.spacings.xxsmall};
        }
      }
    }
  `}
`;
