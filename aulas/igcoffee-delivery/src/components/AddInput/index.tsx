import { Minus, Plus } from 'phosphor-react'
import { AddInputContainer, IconWrapper } from './styles'

export function AddInput() {
  return (
    <AddInputContainer>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </AddInputContainer>
  )
}
