import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodsContainer } from './styles'

export function PaymentMethods() {
  return (
    <PaymentMethodsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodsContainer>
  )
}
