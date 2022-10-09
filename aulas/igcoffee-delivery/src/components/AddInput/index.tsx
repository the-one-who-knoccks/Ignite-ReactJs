import { Minus, Plus } from 'phosphor-react'
import { AddInputContainer, IconWrapper } from './styles'

interface AddInputProps {
  size?: 'medium' | 'small'
  amount: number
  onIncrease: () => void
  onDecrease: () => void
}

export function AddInput({
  onIncrease,
  onDecrease,
  amount,
  size = 'medium',
}: AddInputProps) {
  return (
    <AddInputContainer size={size}>
      <IconWrapper disabled={amount <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={amount} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </AddInputContainer>
  )
}
