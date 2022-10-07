import { HeaderContainer, HeaderButtonContainer, HeaderButton } from './styles'
import LogoImg from '../../../src/assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={LogoImg} alt="" />
        </NavLink>
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Volta Grande, MG
          </HeaderButton>
          <NavLink to="/complete-order">
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
