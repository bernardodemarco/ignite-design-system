import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',

  backgroundColor: '$gray900',
  borderRadius: '$sm',
  border: '2px solid $gray900',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      small: {
        padding: '$2 $3',
      },
      medium: {
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
