import { TitleText } from '../../../../components/Typography'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeList, CoffeeSectionContainer } from './styles'
import { coffees } from '../../../../../src/utils/CoffeeList'

export function CoffeeSection() {
  return (
    <CoffeeSectionContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeeSectionContainer>
  )
}
