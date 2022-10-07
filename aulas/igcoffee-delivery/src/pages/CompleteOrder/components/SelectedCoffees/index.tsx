import { TitleText } from '../../../../components/Typography'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Produtos selecionados
      </TitleText>

      <DetailsContainer>
        <>itens</>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
