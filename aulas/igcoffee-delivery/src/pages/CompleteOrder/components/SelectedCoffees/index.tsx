import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { CoffeeCart } from '../CoffeeCart'
import { ConfirmationSection } from '../ConfirmationSection'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Produtos selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCart key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
