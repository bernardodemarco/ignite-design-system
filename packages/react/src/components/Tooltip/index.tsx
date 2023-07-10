import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipContent } from './styles'

import { ReactNode } from 'react'
import { Text } from '../Text'

export interface TooltipProps {
  text: string
  children: ReactNode
}

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={200}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent>
            <Text size={'sm'}>{text}</Text>
            <RadixTooltip.Arrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
