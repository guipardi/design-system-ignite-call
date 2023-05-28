import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$code',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
})

export const App = () => {
  return <Button>Enviar</Button>
}
