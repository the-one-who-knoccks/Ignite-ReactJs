import { ActionsContainer, CoffeeCartContainer, RemoveButton } from './styles'
import ExpressoImg from '../../../../../public/coffees/americano.png'
import { RegularText } from '../../../../components/Typography'
import { AddInput } from '../../../../components/AddInput'
import { Trash } from 'phosphor-react'

export function CoffeeCart() {
  return (
    <CoffeeCartContainer>
      <div>
        <img src={ExpressoImg} alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <AddInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>RS 9,90</p>
    </CoffeeCartContainer>
  )
}
