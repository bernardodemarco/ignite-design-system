import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
