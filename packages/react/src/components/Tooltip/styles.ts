import { styled } from '../../styles'
import * as TooltipComponent from '@radix-ui/react-tooltip'

export const ToooltipContainer = styled(TooltipComponent.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  color: '$gray100',
  borderRadius: '$xs',
  fontFamily: '$default',
  fontWeight: '$medium',
})
