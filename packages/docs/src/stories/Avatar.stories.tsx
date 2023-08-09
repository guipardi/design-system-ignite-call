import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@guilhermepardi-ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/guipardi.png',
    alt: 'Guilherme Pardi Borges',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
