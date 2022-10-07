import { CoffeeSection } from './components/CoffeeSection'
import { HeroSection } from './components/HeroSection'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <CoffeeSection />
    </HomeContainer>
  )
}
