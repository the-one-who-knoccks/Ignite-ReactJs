import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { AddressForm } from '../AdressForm'
import { PaymentMethods } from '../PaymentMethods'

import { SectionTitle } from '../SectionTitle'
import { CompleteOrderContainer, FormSectionContainer } from './styles'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
          title="Endereço de entrega"
          subtitle="Infome o endereço onde deseja receber o seu pedido"
        />

        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <PaymentMethods />
      </FormSectionContainer>
    </CompleteOrderContainer>
  )
}
