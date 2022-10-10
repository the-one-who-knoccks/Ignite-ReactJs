import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { CartItemsTotal, cartAmount } = useCart()

  const cartTotal = DELIVERY_PRICE + CartItemsTotal

  const formattedTotalItems = formatMoney(CartItemsTotal)
  const formattedTotal = formatMoney(cartTotal)
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText size="s">R$ {formattedTotalItems}</RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText size="s">R$ {formatDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedTotal}
        </RegularText>
      </div>
      <Button
        text="Confirmar pedido"
        disabled={cartAmount <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
