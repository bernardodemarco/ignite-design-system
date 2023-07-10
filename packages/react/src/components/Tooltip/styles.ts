import { styled } from '../../styles'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export const TooltipContent = styled(RadixTooltip.Content, {
  padding: '0.75rem 1rem',
  borderRadius: 5,
  backgroundColor: '$gray900',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
