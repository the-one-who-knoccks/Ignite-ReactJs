import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'
import { ShoppingCart } from 'phosphor-react'

import { RegularText, TitleText } from '../../../../components/Typography'
import { AddInput } from '../../../../components/AddInput'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [amount, setAmount] = useState(1)

  function handleIncreaseCounter() {
    setAmount((state) => state + 1)
  }

  function handleDecreaseCounter() {
    setAmount((state) => state - 1)
  }

  const { addCoffeeToCart } = useCart()

  function hadnleAddToCard() {
    const addCoffee = {
      ...coffee,
      amount,
    }
    addCoffeeToCart(addCoffee)
  }

  const formattedPrice = formatMoney(coffee.price)

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <AddInput
            onIncrease={handleIncreaseCounter}
            onDecrease={handleDecreaseCounter}
            amount={amount}
          />
          <button onClick={hadnleAddToCard}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
