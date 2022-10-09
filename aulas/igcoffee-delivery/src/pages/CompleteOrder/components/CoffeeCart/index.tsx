import { ActionsContainer, CoffeeCartContainer, RemoveButton } from './styles'
import { RegularText } from '../../../../components/Typography'
import { AddInput } from '../../../../components/AddInput'
import { Trash } from 'phosphor-react'
import { CartItem } from '../../../../context/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCart({ coffee }: CoffeeCartCardProps) {
  const { updateCartAmount, removeCartItem } = useCart()

  function handleIncrease() {
    updateCartAmount(coffee.id, 'increase')
  }

  function handleDecrease() {
    updateCartAmount(coffee.id, 'decrease')
  }

  function hadnleRemoveItem() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.amount
  const formattedPrice = formatMoney(coffeeTotal)

  return (
    <CoffeeCartContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <AddInput
              size="small"
              amount={coffee.amount}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            <RemoveButton onClick={hadnleRemoveItem}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>RS {formattedPrice}</p>
    </CoffeeCartContainer>
  )
}
