import styled, { css } from 'styled-components';

interface FieldProps {
  isErrored: boolean;
}

export const Container = styled.div<FieldProps>`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: ${theme.spacings.xsmall};
    }

    input,
    textarea {
      width: 100%;
      flex: 1;
      font-size: ${theme.font.sizes.body};
      background: transparent;
      padding: ${theme.spacings.small};

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

    p {
      font-size: ${theme.font.sizes.bodySmall};
      color: ${theme.colors.red};
      align-self: flex-end;
    }
  `}

  ${({ theme, isErrored }) =>
    isErrored &&
    css`
      div {
        background: ${theme.colors.mostLightestRed};
        border-color: ${theme.colors.red};

        input {
          &::placeholder {
            color: ${theme.colors.red};
          }
        }
      }
    `}
`;
