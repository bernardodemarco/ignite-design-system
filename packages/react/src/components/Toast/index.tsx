import * as RadixToast from '@radix-ui/react-toast'
import { HeaderContainer, ToastClose, ToastViewport } from './styles'

import { X } from '@phosphor-icons/react'
import { Box } from '../Box'
import { Heading } from '../Heading'
import { Text } from '../Text'

export interface ToastProps {
  title: string
  description: string
}

export function Toast({ title, description }: ToastProps) {
  return (
    <RadixToast.Provider duration={2500} label="Notificação">
      <RadixToast.Root asChild>
        <Box as="article">
          <HeaderContainer>
            <RadixToast.Title asChild>
              <Heading as="h3" size="sm">
                {title}
              </Heading>
            </RadixToast.Title>
            <ToastClose asChild>
              <X size={20} />
            </ToastClose>
          </HeaderContainer>
          <RadixToast.Description asChild>
            <Text size="sm" css={{ color: '$gray200' }}>
              {description}
            </Text>
          </RadixToast.Description>
        </Box>
      </RadixToast.Root>
      <ToastViewport />
    </RadixToast.Provider>
  )
}
Toast.displayName = 'Toast'
