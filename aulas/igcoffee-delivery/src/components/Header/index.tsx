import { HeaderContainer, HeaderButtonContainer, HeaderButton } from './styles'
import LogoImg from '../../../src/assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={LogoImg} alt="" />
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Volta Grande, MG
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
