import { TitleText, RegularText } from '../../components/Typography'
import { ConfirmedOrderContainer, DetailsOrderContainer } from './styles'

import SuccessImg from '../../../src/assets/success-illustration.svg'
import { InfoIcon } from '../../components/InfoIcons'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function ConfirmedOrder() {
  const { colors } = useTheme()

  return (
    <ConfirmedOrderContainer className="container">
      <div>
        <TitleText size="l">Uhuul! Pedido confirmado!</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você!
        </RegularText>
      </div>
      <section>
        <DetailsOrderContainer>
          <InfoIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>Américo P Fernandes, 48</strong>
                <br />
                Centro - Volta Grande, MG
              </RegularText>
            }
          />
          <InfoIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de crédito</strong>
              </RegularText>
            }
          />
        </DetailsOrderContainer>
        <img src={SuccessImg} alt="" />
      </section>
    </ConfirmedOrderContainer>
  )
}
