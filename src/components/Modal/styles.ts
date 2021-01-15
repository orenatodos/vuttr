import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.small};
    background: rgba(0, 0, 0, 0.5);

    > div {
      width: 100%;
      max-width: 60rem;
      padding: ${theme.spacings.medium};
      background: ${theme.colors.white};
      border-radius: ${theme.radius.default};
      max-height: 52rem;
      overflow: auto;
    }
  `}
`;
