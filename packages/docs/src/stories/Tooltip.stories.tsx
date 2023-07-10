import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    text: '19 de Outubro - Disponível',
    children: (
      <Box
        css={{
          width: 25,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>19</Text>
      </Box>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
