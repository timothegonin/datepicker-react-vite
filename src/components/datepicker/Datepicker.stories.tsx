import type { Meta } from '@storybook/react'
import { Datepicker } from './Datepicker'

const meta: Meta<typeof Datepicker> = {
  title: 'Example/Datepicker',
  component: Datepicker,
  tags: ['docsPage'],
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
}

export default meta

export const Primary = () => {
  return (
    <Datepicker
      label="Input Label"
    />
  )
}