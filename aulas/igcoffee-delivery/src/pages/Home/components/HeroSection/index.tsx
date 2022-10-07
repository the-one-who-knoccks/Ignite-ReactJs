import {
  HeroContainer,
  SectionContent,
  SectionTitle,
  SubSectionTitle,
} from './styles'
import HeroImg from '../../../../../src/assets/hero-image.png'
import { RegularText } from '../../../../components/Typography'
import { InfoIcon } from '../../../../components/InfoIcons'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function HeroSection() {
  const { colors } = useTheme()

  return (
    <HeroContainer>
      <SectionContent className="container">
        <div>
          <section>
            <SectionTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </SectionTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <SubSectionTitle>
            <InfoIcon
              iconBg={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoIcon
              iconBg={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoIcon
              iconBg={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoIcon
              iconBg={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </SubSectionTitle>
        </div>
        <img src={HeroImg} alt="imagem café" />
      </SectionContent>
    </HeroContainer>
  )
}
