/* eslint-disable react/display-name */
/* eslint-disable n/handle-callback-err */
import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import {
  InputStyleContainer,
  InputWrapper,
  StyledInput,
  RightPlaceholder,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightPlaceholder?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightPlaceholder, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <StyledInput {...props} ref={ref} />
          {rightPlaceholder && (
            <RightPlaceholder>{rightPlaceholder}</RightPlaceholder>
          )}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)
