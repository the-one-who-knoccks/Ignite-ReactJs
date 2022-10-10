import styled from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors['base-error']};
  }
`
