import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const HeaderButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  border-radius: 8px;
  border: none;
  padding: 0 0.5rem;
  position: relative;

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors['brand-purple']};
      }
    `}
`
