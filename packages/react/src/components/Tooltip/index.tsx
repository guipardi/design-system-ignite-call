import * as TooltipComponent from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { ToooltipContainer } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipComponent.Root> & {
  content: string | ReactNode
}

export const Tooltip = ({ content, children, ...props }: TooltipProps) => (
  <TooltipComponent.Provider>
    <TooltipComponent.Root {...props}>
      <TooltipComponent.Trigger asChild>{children}</TooltipComponent.Trigger>
      <TooltipComponent.Portal>
        <ToooltipContainer>
          <TooltipComponent.Arrow />
          {content}
        </ToooltipContainer>
      </TooltipComponent.Portal>
    </TooltipComponent.Root>
  </TooltipComponent.Provider>
)

Tooltip.displayName = 'Tooltip'
