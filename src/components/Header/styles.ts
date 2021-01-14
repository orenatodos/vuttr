import styled, { css } from 'styled-components';

import { Container as Button } from '../Button/styles';

export const Container = styled.header`
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.font.sizes.header5};
    }

    h2 {
      font-size: ${theme.font.sizes.header3};
      margin-top: ${theme.spacings.xxsmall};
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: ${theme.spacings.xlarge};

      div {
        display: flex;
        align-items: center;
      }

      ${Button} {
        height: 5rem;
        padding: 0 ${theme.spacings.medium};
      }
    }
  `}
`;

export const Checkbox = styled.label`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-left: ${theme.spacings.small};
    text-transform: lowercase;
    cursor: pointer;

    span {
      font-weight: ${theme.font.semibold};
      margin-left: ${theme.spacings.xsmall};
      display: block;
    }
  `}
`;

export const SearchBar = styled.label`
  ${({ theme }) => css`
    height: 5rem;
    display: flex;
    align-items: center;
    color: ${theme.colors.lighterInk};
    background: ${theme.colors.darkerWhite};
    border: 0.1rem solid ${theme.colors.darkestWhite};
    border-radius: ${theme.radius.default};
    padding: 0 ${theme.spacings.small};

    svg {
      margin-right: ${theme.spacings.small};
    }

    input {
      width: 100%;
      height: 100%;
      flex: 1;
      font-size: ${theme.font.sizes.body};
      color: ${theme.colors.ink};
      background: transparent;

      &::placeholder {
        color: ${theme.colors.lighterInk};
      }
    }
  `}
`;
