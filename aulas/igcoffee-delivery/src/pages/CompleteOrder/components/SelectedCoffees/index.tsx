import { TitleText } from '../../../../components/Typography'
import { CoffeeCart } from '../CoffeeCart'
import { ConfirmationSection } from '../ConfirmationSection'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Produtos selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCart />
        <CoffeeCart />

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
