import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      background: ${theme.colors.white};
      border-radius: ${theme.radius.default};
      padding: ${theme.spacings.medium};
    }
  `}
`;
