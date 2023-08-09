import type { StoryObj, Meta } from '@storybook/react'
import { Text, Box, Checkbox, CheckboxProps } from '@guilhermepardi-ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          <Text>Accept terms of use</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
}
