import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 32,
  right: 32,
  width: '22.5rem',
  maxWidth: '100vw',
})

export const HeaderContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '0.275rem',

  h3: {
    color: '$white',
  },
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: 16,
  right: 16,
  cursor: 'pointer',
  color: '$gray200',
})
