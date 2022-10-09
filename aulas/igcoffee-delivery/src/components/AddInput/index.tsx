import { Minus, Plus } from 'phosphor-react'
import { AddInputContainer, IconWrapper } from './styles'

interface AddInputProps {
  size?: 'medium' | 'small'
}

export function AddInput({ size = 'medium' }: AddInputProps) {
  return (
    <AddInputContainer size={size}>
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
