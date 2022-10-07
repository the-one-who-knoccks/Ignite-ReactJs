import { ReactNode } from 'react'
import { IconContainer, ItemContainerIcon } from './styles'

interface ItemContainerIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function InfoIcon({ icon, text, iconBg }: ItemContainerIconProps) {
  return (
    <ItemContainerIcon>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </ItemContainerIcon>
  )
}
