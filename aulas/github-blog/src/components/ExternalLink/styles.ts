import styled, { css } from 'styled-components'

interface ExternalLinkProps {
  variant?: 'iconLeft'
}

export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
  height: 19px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['brand-blue']};
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  text-transform: uppercase;
  align-items: center;
  display: flex;
  gap: 0.5rem;
  font-weight: 700;
  transition: 0.4s;
  border-bottom: 1px solid transparent;
  line-height: 19px;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  ${({ variant }) =>
    variant === 'iconLeft' &&
    css`
      flex-direction: row-reverse;
    `}
`
