import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: ${theme.font.semibold};
    margin-top: ${theme.spacings.small};

    label {
      font-size: ${theme.font.sizes.body};
      font-weight: ${theme.font.semibold};
    }

    div {
      width: 100%;
      border-radius: ${theme.radius.default};
      margin: ${theme.spacings.xsmall} 0;
      background: ${theme.colors.darkerWhite};
      border: 0.1rem solid ${theme.colors.darkestWhite};
    }

    input,
    textarea {
      width: 100%;
      flex: 1;
      padding: ${theme.spacings.small};
      font-size: ${theme.font.sizes.body};
      background: transparent;

      &::placeholder {
        color: ${theme.colors.lighterInk};
      }
    }

    input {
      height: 5rem;
    }

    textarea {
      height: 18rem;
      resize: none;
    }
  `}
`;
