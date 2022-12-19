import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { fontsize: '$xl' },
      md: { fontsize: '$2xl' },
      lg: { fontsize: '$4xl' },
      '2xl': { fontsize: '$5xl' },
      '3xl': { fontsize: '$6xl' },
      '4xl': { fontsize: '$7xl' },
      '5xl': { fontsize: '$8xl' },
      '6xl': { fontsize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}
